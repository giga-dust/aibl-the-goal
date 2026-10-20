---
name: constraint-finder
description: Use when asked "where is work waiting", "map the work line", "find the bottleneck", or at the start of any efficiency review. Maps a work stream onto Produce → Context → Decide → Act → Learn, measures queue count and age per step from tracker, CRM, messaging or sample data, and names one constraint. Falls back to five questions when there is no data. Read-only.
---

# Constraint finder

Where work waits is the constraint. Not where people are busiest.

## Inputs

1. The work line for this team from the Pod `README.md` (five steps, what each means here, where the data lives). If none exists, build it with the person in one exchange.
2. Items with status timestamps from the work tracker or CRM: created, entered current step, left step, closed. Accept exports (CSV) or tool queries.
3. Waiting signals from messaging ("any update", "waiting on", "blocked") in the last seven days.
4. Optional: meeting hours of the people at the Decide step; external threads waiting on the team.
5. No data? Use the five questions in the fallback section.

## Method

1. Assign every open item to one of the five steps using the mapping in `README.md`. Items that do not fit go to "unmapped" and are reported as a count, never dropped silently.
2. Per step compute: open count, oldest item age (days), median wait (days in step). Use the item's step-entry timestamp; if only created dates exist, say so and use age since created.
3. Rank steps by oldest age first, then median wait, then count. The top step is the constraint. If two steps are within 10% on all three, name the one closer to Decide as primary and the other as "watch".
4. Add qualitative evidence: two or three waiting signals that point to the same step, with source and date.
5. Compare with the lead's stated guess if one exists. State the gap plainly.

## Output format

```
Constraint map · {work stream} · {date} · sources: {list} · missing: {list} · unmapped: {n}

Step       Open   Oldest (d)   Median wait (d)
Produce    ..     ..           ..
Context    ..     ..           ..
Decide     ..     ..           ..          ← work waits here
Act        ..     ..           ..
Learn      ..     ..           ..

Constraint: {step}. Evidence: {two or three dated signals}.
Your guess vs data: {two sentences}.
Number to watch: age of oldest item at {step}: {d} days.
Next: run five-focusing-steps on {step}.
```

Save to `constraints/current.md` and append one row to `constraints/history.md` when running in a Pod. If the Pod has a `TheGoalDashboard/` folder, rewrite `TheGoalDashboard/data.json` in its existing shape (`steps[]` with `name`, `open`, `oldestDays`, `medianWaitDays`; `constraint`; `watchNumber` with `label`, `value`, `unit`, `delta`; `moves[]` with `type`, `what`, `owner`, `by`, `status`; `label` set to "sample data" when built on the sample files) and republish it with `dsbx frame publish /files/pod-<podId>/TheGoalDashboard/manifest.json`.

## Fallback: five questions

Ask three people who do the work, or the lead for all three:
1. What were you waiting for yesterday?
2. Who was waiting for you?
3. Which step did the oldest open item get stuck at?
4. What arrives at you not ready to decide?
5. What would you stop producing if nobody noticed?

Tally answers per step. Three agreeing answers name the constraint with "interview evidence" instead of counts.

## Rules

- Read-only. Never change a status, assignee or date.
- Steps are constraints; people are not. Report owners of a step only when the lead asks for owners.
- Never invent counts. "Not found" plus the fallback.
- One constraint. Everything else is "watch".
