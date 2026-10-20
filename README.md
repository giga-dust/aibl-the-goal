# The Goal Pod · a Dust kit

A Pod that answers one question every Monday: where does work wait, and what is the one move that frees it.

**For:** Team leads who own a flow of work: product, support, operations, recruiting, sales ops.
**Shape:** Flow. One Pod skill shapes the Pod; the other skills run the routines inside it. No agent definitions, nothing is sent without you.

## What is in the kit

Everything is a Dust skill. The import reads every folder that holds a `SKILL.md`; the files next to it (templates, sample data, the dashboard) come along as that skill's attachments.

| Skill | What it does |
|---|---|
| `the-goal-pod` | **The Pod skill.** Shapes the whole Pod: six-question interview, the work stream mapped on five steps, read-only tool checks, Pod files, pinned constraint dashboard, Monday brief as a wake-up. Stays as the operating manual. |
| `constraint-finder` | The Monday map: open items, oldest item and median wait per step; the one step where work waits. |
| `five-focusing-steps` | Goldratt's five steps turned into three moves with an owner and a date each. |
| `constraint-brief` | The weekly brief and the monthly relocation review. |

The Pod skill folder also carries `CONNECT.md` (which tools to connect, one read-only check each), the Pod file templates, fictional sample data for a dry run, and `dashboard/`: a Frame built for the Pod banner that shows the five-step work line, the constraint marked, the number to watch, moves in play.

## Set up in ten minutes

1. **Import the skills.** In Dust: Skills → Create skill → From existing → paste `https://github.com/giga-dust/aibl-the-goal` → select all → Import. Set availability to "Members and agents" so the Pod's agent can use them.
2. **Create a Pod.** Pods → New → Restricted, members: you.
3. **Attach the Pod skill and start.** In the Pod, attach `the-goal-pod` from the composer and send: *Set up this Pod. Start with the interview.*
4. **Answer six questions.** One-line answers are fine; "skip" applies the default. The agent checks your tools read-only, writes the Pod files, pins the dashboard, runs the first brief on your data or on the sample data, and proposes the routines (a constraint brief on Mondays, a relocation review monthly). It schedules nothing until you say yes.

Tools to connect, in order of value: a work tracker or CRM (Jira, Linear, Asana, Monday, GitHub, HubSpot, Salesforce), messaging, calendar, optionally a data warehouse. Details and a read-only check per tool are in `skills/the-goal-pod/CONNECT.md`.

## Guardrails built into every skill

- Prepare, never send: no email, message, CRM update or meeting without an explicit instruction in the current conversation.
- Never invent: missing data is written as "not found in connected sources".
- One screen per brief; decisions first, detail underneath.
- Routines run as wake-ups with your credentials. "Stop the schedule" ends one.

## Sister kits

[Command Center Pod](https://github.com/giga-dust/aibl-command-center) · [Second Brain Pod](https://github.com/giga-dust/aibl-second-brain). Same structure, same guardrails, a different shape.

## Workshop

Built for the Dust × aiBL workshop "Build your Command Center". Attendee code **AIBL2026PRO** at sign-up. Questions: support@dust.tt.

MIT licence. The sample data is fictional.
