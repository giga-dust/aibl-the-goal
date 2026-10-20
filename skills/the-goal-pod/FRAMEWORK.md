# The constraint-revealing framework

Named after Eliyahu Goldratt's *The Goal*. One idea carries it: **fix one bottleneck and the next one appears.** The constraint does not vanish, it relocates. Teams that adopt AI feel this immediately: producing got cheap, and the queue moved somewhere else.

## 1. The work line

Every knowledge-work process can be drawn as five steps. Work flows left to right and waits somewhere.

```
Produce  →  Context  →  Decide  →  Act  →  Learn
drafts,     calendar,    judgment:   send,      what
analysis,   CRM, inbox,  prioritize, update,    worked,
code        data         personalize, schedule   what
                         position               didn't
```

| Step | What happens | Typical queue | What AI changed |
|---|---|---|---|
| Produce | Drafts, analysis, code, designs | Waiting for someone to write it | Generation is cheap. Rarely the constraint anymore. |
| Context | Gathering what the work needs: calendar, CRM, inbox, data, history | Waiting for information, searching, asking around | Connected agents gather it. Shrinking fast. |
| Decide | A person judges: priority, fit, message, go or no-go | Waiting for a review, an approval, a choice | Does not shrink. This is the constraint that stays. |
| Act | Sending, updating, scheduling, shipping | Waiting for a tool, a permission, a handoff | Agents can act after review. Cheap once decided. |
| Learn | Seeing what worked, feeding it back | Nobody looks back | Logs make it possible; habit makes it happen. |

**Where work waits is the constraint.** Not where people are busiest. Not where the loudest complaint is. The step with the longest queue (count and age) sets the pace of the whole line.

## 2. Three lessons

1. **Speed constraints relocate.** Remove one and the next shows up within weeks. Plan for the move, not for the fix.
2. **Code generation is cheap.** So is text, so is analysis. Producing more is no longer the win; deciding faster on the right things is.
3. **Management focus must shift to the new constraint.** The job of a lead is to find where work waits now, protect that step, and feed it only work worth deciding on.

A fourth, for the people in the room: **be AI-reflexive.** Shorten the distance between hitting a problem and solving it with an agent. The teams that do this find the next constraint first, and that is an advantage.

## 3. Goldratt's five focusing steps, translated

| Step | Original | For a team adopting AI |
|---|---|---|
| 1 Identify | Find the constraint | Measure where work waits: queue count and age per step. Name one constraint. |
| 2 Exploit | Get the most out of it without spending | Protect the constrained step: fewer interruptions, pre-gathered context, decisions batched at a fixed time, everything arriving ready to decide. |
| 3 Subordinate | Make everything else serve it | Stop overproducing upstream (more drafts do not help a review queue). Release work at the rate the constraint can absorb. |
| 4 Elevate | Add capacity | Delegate, add a reviewer, give an agent the routine part (first pass, pre-filled fields, drafted answers), raise the review threshold. |
| 5 Repeat | Do not let inertia become the constraint | Re-measure in four weeks. The constraint has probably moved. Start again. |

## 4. Measures that matter

Goldratt's three, translated for knowledge work:

- **Throughput (T)**: decisions or deliverables completed per week that the customer or the business actually needed.
- **Inventory (I)**: work in progress waiting at any step. Count it. Age it.
- **Operating expense (OE)**: hours and tool cost spent turning I into T.

Flow measures per step: queue count, oldest item age, median wait, handoffs per item. Watch one number: **the age of the oldest item at the constraint.** When it drops, the constraint is being exploited. When it jumps elsewhere, the constraint relocated.

## 5. Revealing the constraint in practice

Data when you have it (tickets, tasks, pull requests, deal stages, support queues): timestamp per step, group by step, compute count and age. Conversations when you do not: the five questions below, asked to three people doing the work, usually agree.

1. What were you waiting for yesterday?
2. Who was waiting for you?
3. Which step did the oldest open item get stuck at?
4. What arrives at you not ready to decide?
5. What would you stop producing if nobody noticed?

Draw the line, mark the step with the longest queue, write "work waits here". That is the constraint map. Everything in this Pod starts from it.

## 6. What a Pod does with this

- Monday: the **constraint brief**. Where work waited longest last week, the one constraint, three moves (exploit, subordinate, elevate), the number to watch, and whether the constraint moved.
- Any day: "where is work waiting?" on a team, a process or a deal flow.
- Monthly: the **relocation review**. Did the constraint move? Update `constraints/history.md`. Decide what the lead focuses on next.

Produce less. Decide better. Move with the constraint.
