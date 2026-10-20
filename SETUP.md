# The Goal Pod · SETUP

**AGENT: START HERE.** A person has dropped this file into a Dust Pod and asked you to set the Pod up. Follow it in order. Do not skip the interview. Measure and propose; never change anything in the person's tools. When you finish, report with the checklist in Part 6 and stop.

Human reading this? The agent does the work. Your part is six answers and one review. About ten minutes.

Read `FRAMEWORK.md` from this kit before you start if it is available to you; it defines the work line, the constraint and the five focusing steps that everything below relies on.

---

## Part 0 · Contract

You will:
1. Ask six questions in one message, accept partial answers, use the defaults below for the rest.
2. Map the person's work stream onto the five-step line: Produce → Context → Decide → Act → Learn.
3. Probe the tools the person allows with read-only calls only.
4. Write the Pod files in Part 3 and keep them short.
5. Produce the first constraint map from data, or from the five questions when there is no data.
6. Propose the routines and schedule them only after an explicit yes. Report and stop.

You will not:
- Modify trackers, CRMs, calendars, messages or any external record.
- Invent counts, dates or names. Missing data is "not found".
- Name people as "the bottleneck". Steps are constraints; people are not.

If you are not inside a Pod (no Files tab, no Pod description), say so and ask the person to create one (Pods → New) and run you again from inside it.

Reference for Pods, Files and wake-ups: https://docs.dust.tt/docs/user-documentation/pods/overview

---

## Part 1 · Interview (one message, six questions)

Send all six in one message. One-line answers are fine; "skip" applies the default.

1. **You and the team.** Name, role, timezone, team or process name, team size. Where should the Monday brief arrive: here in the Pod (default), a Slack or Teams channel or DM, or email?
2. **The work stream.** One flow to map first, from trigger to done. Examples: "inbound lead to signed", "feature request to shipped", "ticket to resolved", "new hire request to start date". One flow only; the others come later.
3. **Where the work lives.** Which tool holds the items and their status: Jira, Linear, Asana, Monday, GitHub, HubSpot, Salesforce, a spreadsheet, nothing yet? Name the project, board or pipeline if you can.
4. **Tools I may read.** Work tracker or CRM, messaging (Slack or Teams), calendar (Google or Outlook), mailbox (Gmail or Outlook), data warehouse. Anything not listed stays off.
5. **Timing.** Monday brief time (default 08:30 your time). Monthly relocation review (default first Monday of the month, same conversation).
6. **Your guess.** Where do you think work waits most today, and what would you stop producing if nobody noticed? I will compare your guess to the data; the gap is usually the most useful finding.

Defaults when skipped: brief in the Pod, Mondays 08:30 local; monthly review on the first Monday; no tools, sample data from `context/`.

Wait for the answer. If it is incomplete, continue with defaults and list the gaps in the final report.

---

## Part 2 · Map the work line and probe the tools

1. Map the work stream onto the five steps. For each step write one line: what happens here for this team, and where the data for it lives. Show the table to the person and ask for a one-word confirmation before continuing. Adjust names if they use different words, but keep five steps.
2. For each allowed tool, run one read-only probe and record connected / needs authentication / not available:
   - Tracker or CRM: items by status with the date each entered its current status (or days in stage).
   - Messaging: search "any update" and "waiting on" in the team channel, last seven days.
   - Calendar: meeting hours last week for the person at the Decide step, if they are in the team.
   - Mailbox: external threads waiting on a reply from the team, last ten working days.
   - Data warehouse: median created-to-closed days for the last eight weeks, if the person named a table.
3. Never block on a tool. If nothing is connected, use `context/work-items.csv` and `context/handoffs.md` from this kit and label every output "sample data".

---

## Part 3 · Build the Pod

Create these files in the Pod's Files, using the templates in this kit and the interview answers:

1. `README.md` from `pod/README.pod.md`: scope, the work line table, current constraint (filled after Part 4), moves, sources, routines, where things live, guardrails, change log.
2. `constraints/current.md`: the constraint map from Part 4.
3. `constraints/history.md`: a table with one row per week: date, constraint step, queue count, oldest age, median wait, moves in play, note. Add the first row after Part 4.
4. `logs/`: empty; briefs and reviews go here as `logs/YYYY-MM-DD-brief.md`.
5. Skills: if the workspace lets you create Skills, create `constraint-finder`, `five-focusing-steps` and `constraint-brief` from `skills/*/SKILL.md`. If not, copy the three skill bodies into `skills/` in the Pod Files and reference them from `README.md`; agents read Pod files automatically.
6. Agent: if the person wants a dedicated agent, create it from `agents/the-goal-agent.md` with the three skills and only the tools from Part 2. Otherwise the default agent in this Pod follows `README.md`.
7. Pod description: set it to `pod/description.md` with the team name if you can edit it; otherwise ask the person to paste it.
8. Optional banner: if Frames are enabled, copy `frames/ConstraintLine/` into the Pod Files, write the first map to `constraints.json` next to it and suggest pinning the Frame as the Pod banner. Skip silently if Frames are unavailable.

Keep every section under one screen. Tables with a `Source` column beat prose.

---

## Part 4 · First constraint map

Run the `constraint-finder` skill on the connected data (or the sample data). Produce:

- The work line with queue count, oldest item age and median wait per step.
- The one constraint: the step where work waits longest. Mark it "work waits here".
- The gap between the person's guess (question 6) and the data, in two sentences.
- Three moves from the `five-focusing-steps` skill: one exploit, one subordinate, one elevate, each with an owner suggestion and a by-when. Include the AI-reflexive lens: which routine part of the constrained step an agent could take, after review.
- The number to watch: age of the oldest item at the constraint.

Post it in this conversation, save it to `constraints/current.md`, add the first row to `constraints/history.md`, fill the constraint section of `README.md`. Ask: "Does this match what you see? Which move do you want to start with?" Apply corrections before moving on.

---

## Part 5 · Routines (ask first)

Propose, then schedule only after an explicit yes:

- **Constraint brief**: Mondays at the agreed time. Prompt: "Run the constraint-brief skill on the work stream in README.md. Compare to constraints/history.md. Update constraints/current.md and append to history.md. Save to logs/." Delivery: this Pod, or the channel or DM the person chose if messaging is connected.
- **Relocation review**: monthly. Prompt: "Run the constraint-brief skill in monthly mode: has the constraint moved since the first map? What should the lead focus on now? Update README.md."

Scheduling uses the wake-up tool in this conversation (one schedule per conversation; start a second conversation for the monthly review). Wake-ups run with the person's credentials and are billed to them; "stop the schedule" in that conversation ends it. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

If the person declines, write both prompts into `README.md` under Routines for manual use.

---

## Part 6 · Verify and report

```
The Goal Pod · setup report
Live:      [ ] README.md with work line   [ ] constraints/current.md   [ ] history.md first row   [ ] first map saved to logs/
Sources:   Tracker/CRM: ...   Messaging: ...   Calendar: ...   Mailbox: ...   Warehouse: ...
Constraint: {step} · queue {n} · oldest {d} days · number to watch set
Routines:  Monday brief: scheduled / manual   Monthly review: scheduled / manual
Pending:   (tasks created: authentication, data definition, owners for moves)
Change it: edit README.md, or tell me in this Pod. To stop a schedule, say "stop the schedule" in its conversation.
```

Create a Pod task for each pending item and for each move with an owner. Then stop and wait for the person.

---

## Appendix · Guardrails to copy into every agent in this Pod

- Measure and propose. No change to any tool without an explicit instruction in the current conversation.
- Steps are constraints; people are not. Never label a person as the bottleneck.
- One constraint at a time. Three moves, one number to watch.
- Never invent counts or dates. "Not found", then fall back to the five questions in FRAMEWORK.md.
