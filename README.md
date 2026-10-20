# The Goal Pod · operational efficiency through constraints

A templated Dust Pod for team leads and operators who want to know where work actually waits, and what to do about it. Built on Eliyahu Goldratt's *The Goal*: fix one bottleneck and the next one appears, so management focus has to move with the constraint.

Built for the Dust × aiBL workshop *Build your Command Center*. Sister kits: the [Command Center Pod](https://github.com/giga-dust/aibl-command-center) (deals, large accounts, revenue) and the [Second Brain Pod](https://github.com/giga-dust/aibl-second-brain) (proactivity and vision).

## What you get

| Every Monday | Every month | On demand |
|---|---|---|
| **Constraint brief**: where work waited longest last week, the one constraint, three moves, the number to watch. | **Relocation review**: did the constraint move? What does the lead focus on now? | "Where is work waiting in onboarding?", "Map the work line for our deal desk", "What should we stop producing?" |

The framework is in [FRAMEWORK.md](FRAMEWORK.md): the five-step work line (Produce → Context → Decide → Act → Learn), the three lessons, Goldratt's five focusing steps translated for teams adopting AI, and the measures that matter.

## Install in three steps (about ten minutes)

1. **Create an account** at [dust.tt](https://dust.tt). Workshop attendees: choose the Business plan and enter the attendee code **AIBL2026PRO**. Forgot the code? Email support@dust.tt.
2. **Create a Pod** (left sidebar → Pods → New). Restricted if it is yours; Open if the team should see the briefs. Name it `The Goal`.
3. **Drop in the setup file.** In the Pod, start a conversation with the default agent and paste:

   > Read https://raw.githubusercontent.com/giga-dust/aibl-the-goal/main/SETUP.md and set up this Pod by following it exactly. Start with the interview.

   Prefer files? Download `SETUP.md`, upload it in the Pod's **Files** tab, then say: *"Set up this Pod using SETUP.md. Start with the interview."*

The agent asks six questions, maps your work line, probes the tools you allow (read-only), writes the Pod files, produces the first constraint map and offers to schedule the Monday brief. Nothing is changed in your tools during setup.

## Connect your tools

Where work lives decides what to connect. In order (details and read-only checks in [CONNECT.md](CONNECT.md)):

| Priority | Tool | What it unlocks |
|---|---|---|
| 1 | **Work tracker** (Jira, Linear, Asana, Monday, GitHub issues) or **CRM** (HubSpot, Salesforce, Attio) for deal flows | Timestamps per step: the queue counts and ages that reveal the constraint |
| 2 | **Messaging** (Slack or Microsoft Teams) | Where the waiting shows up as "any update on…?"; where the brief is delivered |
| 3 | **Calendar** (Google Calendar or Outlook Calendar) | Meeting load on the constrained people; review slots |
| 4 | **Mailbox** (Gmail or Outlook) | External waits: customers and partners waiting on you |
| 5 | **Data warehouse** (Snowflake, BigQuery, Databricks) | Cycle time and throughput history when the tracker does not keep it |

No tools yet? The kit ships with a fictional work-item export so the first constraint map renders anyway.

## What is inside

| Path | What it is |
|---|---|
| `FRAMEWORK.md` | The constraint-revealing framework: work line, three lessons, five focusing steps, measures |
| `SETUP.md` | The drop-in playbook the Pod agent follows: interview, work-line mapping, tool probes, files, first map, routines |
| `CONNECT.md` | Which tools to connect, in what order, with a read-only check for each |
| `pod/README.pod.md` | Template of the README the agent writes into your Pod |
| `pod/description.md` | The Pod description that points every agent to the README and the guardrails |
| `skills/constraint-finder/SKILL.md` | Builds the constraint map from data or from five questions |
| `skills/five-focusing-steps/SKILL.md` | Turns one constraint into exploit, subordinate and elevate moves, with the AI-reflexive lens |
| `skills/constraint-brief/SKILL.md` | The Monday brief format and the monthly relocation review |
| `agents/the-goal-agent.md` | Name, description, instructions and settings for the agent |
| `routines/ROUTINES.md` | Monday brief, monthly review, wake-up settings |
| `context/` | Fictional sample: work-item export with step timestamps, handoff notes, meeting load |
| `frames/ConstraintLine/` | Optional Frame that draws the work line with queue counts from `constraints.json`; pin it as the Pod banner |

## Principles

- Where work waits is the constraint. Not where people are busiest.
- One constraint at a time. Three moves, one number to watch.
- Re-measure before you re-plan. The constraint has probably moved.
- The agent measures and proposes. People decide what to change. Nothing in your tools is modified without an explicit instruction.

## License

MIT, see `LICENSE`. *The Goal* is by Eliyahu M. Goldratt and Jeff Cox (North River Press, 1984); this kit applies its ideas and quotes none of its text.
