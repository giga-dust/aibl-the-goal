---
name: constraint-brief
description: Use for the weekly Monday brief ("constraint brief", "where did work wait last week") and, in monthly mode, for the relocation review ("has the constraint moved"). Re-runs the constraint map, compares with history, reports the one constraint, the moves in play and the number to watch, and flags when the constraint has relocated.
---

# Constraint brief

Monday, one screen: where work waited last week, what we are doing about it, and whether the constraint moved.

## Weekly mode

1. Run `constraint-finder` on the work stream in `README.md`.
2. Read the last row of `constraints/history.md` and the Moves table in `README.md`.
3. Compare: same constraint or a new one? Number to watch up or down? Moves done, in progress, stalled?
4. If the constraint changed, say "constraint relocated" in the first line and suggest running `five-focusing-steps` on the new step.

```
Constraint brief · week of {date} · {work stream} · sources: {list} · missing: {list}

Constraint: {step} ({same as last week | relocated from {old step}})
Number to watch: oldest item at {step}: {d} days ({↑ ↓ = vs last week})
Queue: {n} items, median wait {d} days.

Moves in play
- {move} · {owner} · {done | in progress | stalled} · {one line}
- ...

This week's ask: {one decision or action for the lead}
Watch: {second step if close}, {unmapped count if any}
```

Save to `logs/YYYY-MM-DD-brief.md`, replace `constraints/current.md`, append a row to `constraints/history.md`, refresh `frames/ConstraintLine/constraints.json` if present.

## Monthly mode (relocation review)

1. Read all rows of `constraints/history.md` since the first map.
2. Report: which steps were the constraint and for how many weeks; the trend of the number to watch; moves that produced a measurable change and moves that did not.
3. State plainly whether management focus should move, and to which step.
4. Propose the next four weeks: keep, adjust or re-run `five-focusing-steps` on the new constraint. Update `README.md` (Current constraint, Moves, Change log).

```
Relocation review · {month} · {work stream}
Constraint history: {step} ({n} weeks) → {step} ({n} weeks)
Number to watch: {start} → {now} days
What worked: ...   What did not: ...
Focus now: {step}. Why: ...
Next four weeks: ...
```

## Rules

- One screen. Detail goes to `logs/`.
- Always compare to history; a brief without the delta is a status report, not a brief.
- Never present a person as the constraint.
- Read-only on all tools. Pod files are the only thing written.
