# Connect your tools

The constraint shows up as timestamps: when an item entered a step and when it left. Connect the tool that holds those timestamps first. Each row has a read-only check to confirm the connection before the first map.

Workspace admins add tools under **Admin → Tools** (in a fresh workspace, that is you). Most tools ask each person to authenticate once, the first time an agent uses them.

| Order | Category | Options | What it unlocks | Read-only check |
|---|---|---|---|---|
| 1a | Work tracker | Jira, Linear, Asana, Monday, GitHub issues or pull requests | Items per step, entered and left dates, assignees, age | "List open items by status with the date each entered its current status." |
| 1b | CRM (for deal or onboarding flows) | HubSpot, Salesforce, Attio | Deals per stage, days in stage, owner | "Show open deals by stage with days in current stage." |
| 2 | Messaging | Slack, Microsoft Teams | Waiting signals ("any update on…?"), handoff chatter, delivery of the Monday brief | "Search our Slack for 'any update' in the last seven days in the team channel." |
| 3 | Calendar | Google Calendar, Outlook Calendar | Meeting load of the people at the constrained step; available review slots | "How many meeting hours did I have last week, by day?" |
| 4 | Mailbox | Gmail, Outlook | External waits: customers or partners waiting on us | "Which external threads from the last ten working days are waiting on a reply from me?" |
| 5 | Data warehouse | Snowflake, BigQuery, Databricks | Cycle time and throughput history; cross-system flows | "Median days from created to closed for items closed in the last 8 weeks, by week." |
| Optional | Support desk | Zendesk, Intercom, Freshservice, Front | Ticket queues and first-response waits | "Open tickets by status with age." |
| Optional | Knowledge | Notion, Confluence, Google Drive (via Company Data) | Process docs, definitions of done | "Find our onboarding process doc." |

## Rules the agent follows with these tools

- Read-only during setup and routine runs. Counting and aging never changes a record.
- Any change to a tracker, CRM, calendar or message requires an explicit instruction in the current conversation, after review.
- If a tool is not connected, the map says "source not connected" and falls back to the five questions in `FRAMEWORK.md`.
- Tool access uses your own credentials. What you cannot see, the agent cannot see.

## Two-minute preflight (workshop)

0:00 to 1:30: authenticate the work tracker or CRM and the messaging tool.
1:30 to 2:00: run the first read-only check. If it answers with dates, you are ready to map.
