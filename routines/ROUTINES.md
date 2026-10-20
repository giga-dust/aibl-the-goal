# Routines

| Routine | When (default) | Prompt | Skill | Where it lands |
|---|---|---|---|---|
| Constraint brief | Mondays 08:30, your timezone | "Run the constraint-brief skill on the work stream in README.md. Compare to constraints/history.md. Update constraints/current.md and append to history.md. Save to logs/." | `constraint-brief` → `constraint-finder` | This Pod, or a Slack or Teams channel or DM if connected |
| Relocation review | First Monday of the month | "Run the constraint-brief skill in monthly mode: has the constraint moved since the first map? What should the lead focus on now? Update README.md." | `constraint-brief` (monthly) | This Pod |
| Moves follow-up | On demand | "Which moves in README.md are stalled, and what is blocking them?" | `five-focusing-steps` | This Pod |

## How scheduling works in Dust

- Schedules use the agent's **wake-up** tool inside a conversation. One schedule per conversation; the agent opens a second conversation for the monthly review.
- A wake-up runs with your credentials and is billed to you; nobody else can post in a conversation that has an active wake-up.
- To stop: say "stop the schedule" in that conversation. To change timing: say the new time.
- Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

## Manual mode

No schedules? Paste the prompts above on Monday morning. The files update the same way.

## After four weeks

Ask: "Read constraints/history.md. Has the constraint moved? What did the moves change?" If the number to watch dropped and the constraint moved, the framework did its job: start again on the new step. If nothing moved, the moves were not aimed at the constraint; re-run five-focusing-steps with the lead in the room.
