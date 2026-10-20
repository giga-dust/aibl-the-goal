---
name: five-focusing-steps
description: Use after a constraint has been named ("what do we do about the review queue", "how do we exploit this", "propose moves"). Applies Goldratt's five focusing steps to one constrained step: exploit, subordinate, elevate, with an AI-reflexive lens on which routine part an agent could take after review. Produces three moves with owners and dates for the lead to decide on.
---

# Five focusing steps

One constraint in, three moves out. The lead decides which to start.

## Inputs

- The constraint map (`constraints/current.md` or the output of `constraint-finder`): step, counts, ages, evidence.
- The work line in `README.md` for what the constrained step means here and who works it.
- Moves already in play (`README.md` → Moves) so you do not propose them again.
- Capacity facts if available: meeting hours of the people at the step, number of reviewers, decision cadence.

## Method

Work through the five steps and write one move for each of 2, 3 and 4.

| Step | Question to answer | Typical moves |
|---|---|---|
| 1 Identify | Is the constraint still {step}? Confirm from the latest map. | None; confirm or re-run constraint-finder. |
| 2 Exploit | How does {step} lose time today? | Batch decisions at a fixed slot; pre-gather context so items arrive ready; cut interruptions; a definition of "ready to decide"; a decision checklist. |
| 3 Subordinate | What upstream produces more than {step} can absorb? | Limit work in progress upstream; release at the constraint's pace; stop generating drafts or leads that will wait; make queue length visible to producers. |
| 4 Elevate | How do we add capacity at {step}? | A second reviewer or delegate; a higher threshold for what needs review; an agent takes the routine part: first-pass triage, pre-filled fields, drafted answers, summaries. Always with a human review gate. |
| 5 Repeat | When do we re-measure? | Set the date (default four weeks). Expect the constraint to move. |

AI-reflexive lens, applied inside step 4: name the one routine part of the constrained step that an agent could do before the person decides, how it would be reviewed, and what it would save per week in items or hours. Do not propose automating the decision itself.

## Output format

```
Five focusing steps · {step} · {date}

1 Identify   Confirmed: {step}, oldest {d} days, queue {n}.
2 Exploit    Move: {what} · Owner: {suggested} · By: {date} · Expected: {effect on the number to watch}
3 Subordinate Move: {what} · Owner · By · Expected
4 Elevate    Move: {what} · Owner · By · Expected · AI-reflexive: {agent takes X, reviewed by Y}
5 Repeat     Re-measure on {date}. Number to watch: oldest item age at {step}.

Decision needed from the lead: which move starts this week?
```

Update the Moves table in `README.md` once the lead chooses. Create a Pod task per chosen move with its owner and date, if the person agrees.

## Rules

- Three moves, not ten. One per step 2, 3 and 4.
- Every move names an effect on the number to watch. No effect, no move.
- Never propose removing people. Propose moving work, thresholds, cadence or capacity.
- Propose; the lead decides. Nothing is changed in any tool.
