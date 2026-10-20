import { FrameRoot } from "@dust/frame";
import { useFile } from "@dust/react-hooks";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { theme } from "./theme";

type Step = { name: string; open: number; oldestDays: number; medianWaitDays?: number };
type Move = { type: string; what: string; owner?: string; by?: string; status?: string };
type Map = {
  generatedAt?: string;
  team?: string;
  workStream?: string;
  constraint?: string;
  watchNumber?: { label: string; value: number; unit?: string; delta?: string };
  steps?: Step[];
  evidence?: string[];
  moves?: Move[];
  note?: string;
};

const NAVY = "#081b2b";
const TURQUOISE = "#18dccc";
const SOFT = "#e8f9f7";
const MUTED = "#526170";
const LINE = "#d9e2e8";
const DARK_TEAL = "#1f9d92";

export default function App() {
  const file = useFile("./constraints.json");
  const [map, setMap] = useState<Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;
    file.text().then((raw) => {
      try {
        const parsed = JSON.parse(raw) as Map;
        if (!cancelled) setMap(parsed);
      } catch {
        if (!cancelled) setError("constraints.json is not valid JSON.");
      }
    }).catch(() => { if (!cancelled) setError("Could not read constraints.json."); });
    return () => { cancelled = true; };
  }, [file]);

  const steps = map?.steps ?? [];
  const maxOpen = Math.max(1, ...steps.map((s) => s.open));
  const moves = map?.moves ?? [];
  const evidence = map?.evidence ?? [];
  const generated = map?.generatedAt ? new Date(map.generatedAt) : null;

  return (
    <FrameRoot theme={theme} className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <header className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: MUTED }}>The Goal · constraint map</p>
          <h1 className="text-3xl font-semibold">{map?.workStream ?? "Work line"}</h1>
          <p className="text-sm" style={{ color: MUTED }}>
            {map?.team ? `${map.team}. ` : ""}
            {generated && !Number.isNaN(generated.getTime()) ? `Measured ${generated.toLocaleDateString()}. ` : ""}
            Where work waits is the constraint.
          </p>
        </header>

        {error && (
          <div className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm" style={{ borderColor: LINE }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}
        {!map && !error && <p className="text-sm" style={{ color: MUTED }}>Loading constraints.json…</p>}

        {steps.length > 0 && (
          <section className="rounded-2xl border p-6" style={{ borderColor: LINE }}>
            <div className="flex items-stretch gap-2">
              {steps.map((s, i) => {
                const isConstraint = s.name === map?.constraint;
                const h = 24 + Math.round((s.open / maxOpen) * 96);
                return (
                  <div key={s.name} className="flex flex-1 items-center gap-2">
                    <div className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-32 w-full items-end justify-center">
                        <div
                          className="w-3/5 rounded-t-lg"
                          title={`${s.open} open`}
                          style={{ height: h, backgroundColor: isConstraint ? NAVY : SOFT, border: `1px solid ${isConstraint ? NAVY : LINE}` }}
                        />
                      </div>
                      <div
                        className="flex w-full flex-col items-center rounded-xl px-2 py-2 text-center"
                        style={{ backgroundColor: isConstraint ? TURQUOISE : "transparent", border: `1px solid ${isConstraint ? TURQUOISE : LINE}` }}
                      >
                        <p className="text-sm font-semibold" style={{ color: NAVY }}>{s.name}</p>
                        <p className="text-xs" style={{ color: isConstraint ? NAVY : MUTED }}>{s.open} open · oldest {s.oldestDays} d</p>
                        {typeof s.medianWaitDays === "number" && (
                          <p className="text-xs" style={{ color: isConstraint ? NAVY : MUTED }}>median {s.medianWaitDays} d</p>
                        )}
                      </div>
                      <p className="h-4 text-xs font-semibold uppercase tracking-wide" style={{ color: DARK_TEAL }}>
                        {isConstraint ? "Work waits here" : ""}
                      </p>
                    </div>
                    {i < steps.length - 1 && <ArrowRight size={16} style={{ color: MUTED, flexShrink: 0 }} />}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <section className="rounded-2xl border p-5" style={{ borderColor: LINE }}>
            <h2 className="text-base font-semibold">Number to watch</h2>
            {map?.watchNumber ? (
              <div className="mt-2">
                <p className="text-4xl font-semibold" style={{ color: NAVY }}>
                  {map.watchNumber.value}<span className="ml-1 text-base font-medium" style={{ color: MUTED }}>{map.watchNumber.unit ?? ""}</span>
                </p>
                <p className="text-sm">{map.watchNumber.label}</p>
                {map.watchNumber.delta && <p className="text-xs" style={{ color: DARK_TEAL }}>{map.watchNumber.delta}</p>}
              </div>
            ) : <p className="text-sm" style={{ color: MUTED }}>Not set.</p>}
            {evidence.length > 0 && (
              <ul className="mt-4 space-y-1 text-xs" style={{ color: MUTED }}>
                {evidence.map((e, i) => <li key={`${e}-${i}`}>{e}</li>)}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border p-5" style={{ borderColor: LINE }}>
            <h2 className="text-base font-semibold">Moves in play</h2>
            {moves.length === 0 ? <p className="mt-2 text-sm" style={{ color: MUTED }}>No moves yet. Run five-focusing-steps.</p> : (
              <ul className="mt-2 space-y-3">
                {moves.map((m, i) => (
                  <li key={`${m.type}-${i}`} className="text-sm">
                    <span className="mr-2 rounded-full px-2 py-0.5 text-xs font-semibold" style={{ backgroundColor: SOFT, color: NAVY }}>{m.type}</span>
                    {m.what}
                    <p className="text-xs" style={{ color: MUTED }}>
                      {[m.owner, m.by ? `by ${m.by}` : null, m.status].filter(Boolean).join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {map?.note && <p className="text-xs" style={{ color: MUTED }}>{map.note}</p>}
      </main>
    </FrameRoot>
  );
}
