# ConstraintLine

An optional Dust Frame that draws the five-step work line (Produce → Context → Decide → Act → Learn) with queue count and oldest-item age per step, marks the constraint with "Work waits here", and lists the moves in play. It reads `./constraints.json` from its own folder.

- No server functions, no tool calls, no live refresh. It is a snapshot the agent updates by rewriting `constraints.json` (the `constraint-finder` and `constraint-brief` skills do this).
- To use it: copy this folder into the Pod's Files, let the agent write `constraints.json`, publish the Frame, then Files → the Frame → **Pin as Pod banner**.
- `constraints.json` here is sample data so the Frame renders before the first real map.
