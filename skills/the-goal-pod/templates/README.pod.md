# The Goal · {{team}}

_Written by the agent during setup, updated by the Monday brief and the monthly review. Agents in this Pod read it first._

## Scope
- Lead: {{lead}}, timezone {{timezone}}. Team or process: {{team}} ({{team_size}} people).
- Work stream mapped: {{work_stream}} (for example "inbound leads to signed", "feature request to shipped", "ticket to resolved").
- Brief delivered: {{delivery}}, Mondays at {{brief_time}}. Relocation review: first {{review_day}} of the month.

## The work line
| Step | What happens here for us | Where the data is | Owner(s) |
|---|---|---|---|
| Produce | {{produce}} | {{produce_source}} | |
| Context | {{context}} | {{context_source}} | |
| Decide | {{decide}} | {{decide_source}} | |
| Act | {{act}} | {{act_source}} | |
| Learn | {{learn}} | {{learn_source}} | |

## Current constraint (as of {{setup_date}})
- Step: {{constraint_step}}. Queue: {{queue_count}} items, oldest {{oldest_age}} days, median wait {{median_wait}} days.
- Evidence: {{evidence}}
- Number to watch: age of the oldest item at {{constraint_step}}. Last value: {{oldest_age}} days.

## Moves in play
| Move | Type | Owner | By when | Status |
|---|---|---|---|---|
| {{move_1}} | Exploit | | | |
| {{move_2}} | Subordinate | | | |
| {{move_3}} | Elevate | | | |

## Connected sources
- Work tracker / CRM: {{tracker_status}}
- Messaging: {{messaging_status}}
- Calendar: {{calendar_status}}
- Mailbox: {{mail_status}}
- Data warehouse: {{warehouse_status}}

## Routines
- Constraint brief (skill `constraint-brief`): Mondays {{brief_time}}, posted {{delivery}}.
- Relocation review (skill `constraint-brief`, monthly mode): first {{review_day}} of the month, posted in this Pod.

## Where things live
- `constraints/current.md`: the constraint map, replaced every Monday.
- `constraints/history.md`: one line per week: step, queue, oldest age, moves. This is where relocation becomes visible.
- `logs/YYYY-MM-DD-brief.md`: every brief and review.
- `TheGoalDashboard/data.json`: the latest map, rendered by the pinned dashboard.

## Guardrails
- Measure and propose. No change to any tool without an explicit instruction in the current conversation.
- One constraint at a time. Three moves, one number.
- Never invent counts or dates. Write "not found" and fall back to the five questions.

## Change log
- {{setup_date}}: Pod set up from the aibl-the-goal kit.
