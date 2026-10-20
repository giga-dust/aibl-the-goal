---
name: the-goal-pod
description: Use to set up, explain or re-shape a The Goal Pod for a team lead who wants to find where work waits (Goldratt's constraint) in one work stream and move it. Shapes the whole Pod - six-question interview, work line mapped on five steps, read-only tool checks, Pod files, pinned constraint dashboard, Monday brief as a wake-up - then stays as the operating manual. The workflow skills constraint-finder, five-focusing-steps and constraint-brief run inside the Pod it shapes.
---

# The Goal Pod

A The Goal Pod answers one question every Monday: where does work wait, and what is the one move that frees it. It maps one work stream onto five steps (Produce → Context → Decide → Act → Learn), finds the step where items wait longest, and tracks the moves against that constraint week after week. Agents read the Pod's `README.md` and Files first; the Monday routine rewrites them. This skill shapes that Pod.

Attached to this skill:

- `FRAMEWORK.md`: the five steps, how to read a queue, the five focusing steps. Copy it into the Pod Files so every agent in the Pod can read it.
- `CONNECT.md`: which tools to connect, in what order, one read-only check per tool.
- `README.pod.md`, `description.md`: templates for the Pod `README.md` and the Pod description.
- `manifest.json`, `index.tsx`, `theme.ts`, `BannerView.tsx`, `data.json`: the constraint dashboard, built for the Pod banner (280 px tall).
- `work-items.csv`, `handoffs.md`, `meeting-load.md`: fictional sample data for a dry run. Label every output built on them "sample data".

Workflow skills shipped with this kit: `constraint-finder` (the Monday map), `five-focusing-steps` (turning a constraint into moves), `constraint-brief` (the weekly and monthly brief format). If one is not active in this conversation, enable it, or ask the person to attach it from the composer. Short versions are at the end of this file.

## Contract

Do:
1. Ask six questions in one message; accept partial answers; fill the rest with the defaults.
2. Map the work stream onto the five steps and get a one-word confirmation before probing anything.
3. Probe tools with read-only calls only. Never block on a tool.
4. Write the Pod files, one screen per section.
5. Create and pin the dashboard.
6. Produce the first constraint map on live data, or on sample data when nothing is connected.
7. Propose the routines; schedule only after the person says yes.
8. Report what is live and what is pending. Then stop.

Do not:
- Change anything in the tracker, CRM, calendar or mailbox. Send nothing.
- Invent items, ages, owners or numbers. Missing data is "not found".
- Create agents. The default agent in this Pod, with this skill and the workflow skills, is enough.
- Name individuals as "the bottleneck". Constraints are steps, never people.

Not inside a Pod? Say so and ask the person to create one (Pods → New → Restricted, members: the lead and whoever they add) and to run you again from inside it. Reference: https://docs.dust.tt/docs/user-documentation/pods/overview

## 1 · Interview (one message, six questions)

1. **You and the team.** Name, role, timezone, team or process name, team size. Where should the Monday brief arrive: here in the Pod (default), a Slack or Teams channel or DM, or email?
2. **The work stream.** One flow to map first, from trigger to done: "inbound lead to signed", "feature request to shipped", "ticket to resolved", "new hire request to start date". One only; the others come later.
3. **Where the work lives.** Which tool holds the items and their status: Jira, Linear, Asana, Monday, GitHub, HubSpot, Salesforce, a spreadsheet, nothing yet? Name the project, board or pipeline if you can.
4. **Tools I may read.** Work tracker or CRM, messaging (Slack or Teams), calendar (Google or Outlook), mailbox (Gmail or Outlook), data warehouse. Anything not listed stays off.
5. **Timing.** Monday brief time (default 08:30 your time). Monthly relocation review (default first Monday of the month).
6. **Your guess.** Where do you think work waits most today, and what would you stop producing if nobody noticed? I will compare your guess to the data; the gap is usually the most useful finding.

Defaults when skipped: brief in the Pod, Mondays 08:30 local; monthly review on the first Monday; no tools, sample data.

## 2 · Map the line, then check the tools

1. Map the work stream onto the five steps. For each step, one line: what happens here for this team, and where its data lives. Show the table and ask for a one-word confirmation. Use the team's words for the steps if they prefer, but keep five.
2. For each allowed tool, run the check from `CONNECT.md` and record connected / needs authentication / not available:
   - Tracker or CRM: items by status with the date each entered its current status, or days in stage.
   - Messaging: "any update" and "waiting on" in the team channel, last seven days.
   - Calendar: meeting hours last week for the person at the Decide step, if they are in the team.
   - Mailbox: external threads waiting on a reply from the team, last ten working days.
   - Data warehouse: median created-to-closed days over eight weeks, if the person named a table.
3. If nothing is connected, use `work-items.csv` and `handoffs.md` and write "sample data" in every header.

## 3 · Write the Pod files

1. `README.md` from `README.pod.md`: scope, the work line table, current constraint (filled after step 5), moves, sources, routines, where things live, guardrails, change log.
2. `method/FRAMEWORK.md`: a copy of the attached framework.
3. `constraints/current.md`: the constraint map from step 5.
4. `constraints/history.md`: one row per week: date, constraint step, queue count, oldest age, median wait, moves in play, note.
5. `logs/`: empty; briefs go here as `logs/YYYY-MM-DD-brief.md`.
6. Pod description: `description.md` with the team name. If you cannot edit it, ask the person to paste it.

## 4 · Dashboard (the pinned banner)

The dashboard renders `data.json` and nothing else. The Monday routine rewrites `data.json`; the team sees the line, the constraint and the number to watch at the top of the Pod.

1. Create `TheGoalDashboard/` in the Pod Files with the attached `manifest.json`, `index.tsx`, `theme.ts`, `ui/BannerView.tsx` (the attached `BannerView.tsx` goes under `ui/`) and `data.json`.
2. After the first map (step 5), overwrite `data.json` in the same shape: five steps with open count, oldest age and median wait; the constraint step; the number to watch with its delta; up to three moves.
3. Publish with the Create Frames skill: `dsbx frame publish /files/pod-<podId>/TheGoalDashboard/manifest.json`.
4. Pin it as the Pod banner with the Pods tool, or ask the person to pin it (Files → the Frame → Pin as Pod banner).

If Frames or the Computer are unavailable, skip this step and say so in the report.

## 5 · First constraint map

Run `constraint-finder` on the connected data or the sample data. Produce:

- The work line with queue count, oldest item age and median wait per step.
- The one constraint: the step where work waits longest. Mark it "work waits here".
- The gap between the person's guess and the data, two sentences.
- Three moves from `five-focusing-steps`: one exploit, one subordinate, one elevate, each with an owner suggestion and a by-when. Include the AI lens: which routine part of the constrained step an agent could take, after review.
- The number to watch: age of the oldest item at the constraint.

Post it here, save it to `constraints/current.md`, add the first row to `constraints/history.md`, fill the constraint section of `README.md`, rewrite `TheGoalDashboard/data.json`. Ask: "Does this match what you see? Which move do you want to start with?" Apply corrections before moving on.

## 6 · Routines (ask first)

Propose, then schedule only after an explicit yes. Scheduling uses the wake-up tool: one schedule per conversation, so start a second conversation for the monthly review. Wake-ups run with the person's credentials; "stop the schedule" in that conversation ends it. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

- **Constraint brief**, Mondays at the agreed time: "Run the constraint-brief skill on the work stream in README.md. Compare to constraints/history.md. Update constraints/current.md, append to history.md, rewrite TheGoalDashboard/data.json and republish the dashboard. Save to logs/."
- **Relocation review**, monthly: "Run the constraint-brief skill in monthly mode: has the constraint moved since the first map? What should the lead focus on now? Update README.md."
- **Moves follow-up**, on demand: "Which moves in README.md are stalled, and what is blocking them?"

If the person declines, write the prompts into `README.md` under Routines for manual use.

## 7 · Report and stop

```
The Goal Pod · setup report
Live:      [ ] README.md with the work line   [ ] constraints/current.md   [ ] history.md first row   [ ] dashboard pinned
Sources:   Tracker/CRM: ...   Messaging: ...   Calendar: ...   Mailbox: ...   Warehouse: ...
Constraint: <step> · oldest item <n> days · guess was <step>
Routines:  Monday brief: scheduled / manual   Monthly review: scheduled / manual
Pending:   (one Pod task per missing item)
Change it: edit README.md, or tell me in this Pod. "stop the schedule" ends a routine.
```

Create a Pod task for each pending item. Then stop.

## Running the Pod after setup

| Ask | Skill | Writes |
|---|---|---|
| "Where does work wait this week?" | `constraint-finder` | `constraints/current.md`, `history.md`, `TheGoalDashboard/data.json` |
| "Turn this into moves" | `five-focusing-steps` | `README.md` moves table |
| "Monday brief" / "monthly review" | `constraint-brief` | `logs/`, `README.md` |
| "Map a second work stream" | this skill, steps 2 to 5 | a second line in `README.md` |

Short versions, for when a workflow skill is not active:

- **constraint-finder.** For each of the five steps: open items, oldest item age, median wait, from the tracker (or the sample CSV). The constraint is the step with the longest wait, not the most items. Quote two or three pieces of evidence with dates and sources. Compare with the lead's guess.
- **five-focusing-steps.** Identify the constraint; exploit it (no idle time at the constraint, items arrive ready); subordinate everything else (cap upstream production); elevate it (more capacity, including an agent doing the routine part after review); repeat when it moves. One owner and one date per move.
- **constraint-brief.** Weekly: the line as a table, the constraint, the number to watch with its delta, moves and their status, one decision for the lead. Monthly: has the constraint moved, what the lead should focus on now. One screen.

Guardrails for every agent in this Pod: read only outside the Pod; constraints are steps, never people; evidence with dates and sources, or "not found"; one screen per brief.
