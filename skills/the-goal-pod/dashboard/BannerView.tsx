import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

export const NAVY = "#081b2b";
export const INK = "#f3f6f7";
export const MUTED = "#9db1be";
export const FAINT = "#5f7889";
export const TURQ = "#18dccc";
export const AMBER = "#f2b84b";
export const WELL = "#0d2538";

export type Viewport = { w: number; h: number };

// Measures the banner's own box (not the window): the Pod column caps width below the browser viewport.
export function useViewport(rootEl: HTMLElement | null, heightOverride?: number): Viewport {
  const [vp, setVp] = useState<Viewport>({
    w: typeof window === "undefined" ? 896 : window.innerWidth,
    h: heightOverride ?? (typeof window === "undefined" ? 280 : window.innerHeight),
  });
  useEffect(() => {
    if (!rootEl) return;
    const read = () => {
      const r = rootEl.getBoundingClientRect();
      setVp({ w: Math.round(r.width), h: heightOverride ?? Math.round(r.height) });
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(rootEl);
    return () => ro.disconnect();
  }, [rootEl, heightOverride]);
  return vp;
}

export type Tier = "phone" | "mid" | "wide";
export function tierOf(w: number): Tier {
  if (w < 560) return "phone";
  if (w < 860) return "mid";
  return "wide";
}

export const ellipsis: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
};

export const LOGO_TOKEN = "pk_BwsxwmCiTI-b4w27PQzL1g";
export function logoUrl(domain: string): string {
  return `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=64&format=png`;
}

const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb";
// Marks for the tools people connect most. Product icons come from Wikimedia Commons (960 px is an allowed thumbnail size), company marks from logo.dev.
export const KNOWN_LOGOS: Record<string, string> = {
  hubspot: logoUrl("hubspot.com"),
  salesforce: logoUrl("salesforce.com"),
  attio: logoUrl("attio.com"),
  pipedrive: logoUrl("pipedrive.com"),
  slack: logoUrl("slack.com"),
  notion: logoUrl("notion.so"),
  linear: logoUrl("linear.app"),
  jira: logoUrl("atlassian.com"),
  asana: logoUrl("asana.com"),
  monday: logoUrl("monday.com"),
  github: logoUrl("github.com"),
  snowflake: logoUrl("snowflake.com"),
  gmail: `${WM}/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png`,
  "google calendar": `${WM}/a/a5/Google_Calendar_icon_%282020%29.svg/960px-Google_Calendar_icon_%282020%29.svg.png`,
  outlook: `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  "outlook calendar": `${WM}/c/cc/Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg/960px-Microsoft_Outlook_Icon_%282025%E2%80%93present%29.svg.png`,
  teams: `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
  "microsoft teams": `${WM}/0/07/Microsoft_Office_Teams_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Teams_%282025%E2%80%93present%29.svg.png`,
};

// Bare brand mark, never boxed, never tinted. Falls back to the plain name if the image does not load.
export function SourceMark({ name, domain, logo, size = 16 }: { name: string; domain?: string; logo?: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const src = logo ?? (domain ? logoUrl(domain) : KNOWN_LOGOS[name.trim().toLowerCase()]);
  if (!src || failed) {
    return <span style={{ fontSize: 12, color: INK, ...ellipsis }}>{name}</span>;
  }
  return (
    <img
      src={src}
      alt={name}
      title={name}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, objectFit: "contain", display: "block", flex: "none" }}
    />
  );
}

export function fmtDate(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
}

// The three kit glyphs, same geometry as the workshop deck: flow, direction, network.
export function KitGlyph({ kind, size = 18 }: { kind: "flow" | "direction" | "network"; size?: number }) {
  const s = size;
  if (kind === "flow") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M2 12h5l3-6 4 12 3-6h5" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (kind === "direction") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
        <path d="M4 20L20 4M20 4h-8M20 4v8" fill="none" stroke={TURQ} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block", flex: "none" }}>
      <circle cx="12" cy="12" r="2.6" fill={TURQ} />
      <circle cx="4" cy="6" r="1.8" fill={TURQ} />
      <circle cx="20" cy="7" r="1.8" fill={TURQ} />
      <circle cx="6" cy="19" r="1.8" fill={TURQ} />
      <circle cx="19" cy="18" r="1.8" fill={TURQ} />
      <path d="M12 12L4 6M12 12l8-5M12 12l-6 7M12 12l7 6" stroke={TURQ} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Header row: keeps the top-right corner empty for the host's hide / expand / unpin controls.
export function Header({
  kind,
  title,
  meta,
  dense,
}: {
  kind: "flow" | "direction" | "network";
  title: string;
  meta: string;
  dense: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: dense ? 30 : 34,
        paddingRight: 112,
        minWidth: 0,
      }}
    >
      <KitGlyph kind={kind} size={dense ? 16 : 18} />
      <span style={{ fontSize: dense ? 14 : 15, fontWeight: 600, color: INK, letterSpacing: "-0.01em", whiteSpace: "nowrap", flex: "none" }}>{title}</span>
      <span style={{ fontSize: 12, color: MUTED, flex: "1 1 auto", ...ellipsis }}>{meta}</span>
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <div style={{ fontSize: 11.5, color: MUTED, fontWeight: 500, marginBottom: 6, ...ellipsis }}>{children}</div>;
}

export function StateNote({ kind, text }: { kind: "loading" | "error" | "empty"; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 2px", color: kind === "error" ? AMBER : MUTED, fontSize: 13 }}>
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: kind === "error" ? AMBER : TURQ,
          opacity: kind === "loading" ? 0.6 : 1,
          flex: "none",
        }}
      />
      <span style={ellipsis}>{text}</span>
    </div>
  );
}

// ---------- The Goal ----------

export type GoalStep = { name: string; open: number; oldestDays: number; medianWaitDays: number };
export type GoalMove = { type: string; what: string; owner?: string; by?: string; status?: string };
export type TheGoalData = {
  generatedAt?: string;
  team?: string;
  workStream?: string;
  label?: string;
  constraint: string;
  watchNumber?: { label: string; value: number; unit?: string; delta?: string };
  steps: GoalStep[];
  moves?: GoalMove[];
};

export function BannerView({
  data,
  height,
  status = "ok",
  message,
}: {
  data: TheGoalData | null;
  height?: number;
  status?: "ok" | "loading" | "error" | "empty";
  message?: string;
}) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const vp = useViewport(rootEl, height);
  const tier = tierOf(vp.w);
  const dense = vp.h < 265;
  const roomy = vp.h >= 420;
  const pad = tier === "phone" ? 14 : roomy ? 28 : 20;

  const steps = (data?.steps ?? []).slice(0, 5);
  const moves = (data?.moves ?? []).slice(0, 3);
  const constraint = data?.constraint ?? "";
  const watch = data?.watchNumber;
  const meta =
    tier === "phone"
      ? [fmtDate(data?.generatedAt), data?.label ?? ""].filter(Boolean).join(" · ")
      : [fmtDate(data?.generatedAt), data?.workStream ?? data?.team ?? "", data?.label ?? ""].filter(Boolean).join(" · ");

  const columns = tier === "wide" ? "minmax(0, 2.2fr) minmax(0, 0.8fr)" : tier === "mid" ? "minmax(0, 2.2fr) minmax(0, 0.9fr)" : "minmax(0, 1fr)";

  return (
    <div
      ref={setRootEl}
      style={{
        width: "100%",
        height: height ?? "100vh",
        overflow: "hidden",
        position: "relative",
        background: NAVY,
        color: INK,
        padding: `${dense ? 10 : 12}px ${pad}px ${dense ? 8 : 12}px`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: dense ? 6 : 10,
      }}
    >
      <Header kind="flow" title="The Goal" meta={meta} dense={dense} />

      {status !== "ok" || !data ? (
        <StateNote
          kind={status === "ok" ? "empty" : status}
          text={message ?? (status === "loading" ? "Reading data.json" : "No map yet. Run the constraint-finder skill to fill this view.")}
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: columns, gap: tier === "phone" ? 8 : 22, flex: 1, minHeight: 0 }}>
          <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <Label>Where work waits · bar = median wait per step</Label>
            <WorkLine steps={steps} constraint={constraint} tier={tier} dense={dense} roomy={roomy} />
            {tier !== "phone" && moves.length > 0 && (
              <div style={{ marginTop: "auto", minWidth: 0, paddingTop: 8 }}>
                <Label>Moves in play</Label>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {moves.slice(0, roomy ? 3 : 2).map((m, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "76px minmax(0, 1fr) auto", gap: 10, fontSize: 12.5, alignItems: "baseline", minWidth: 0 }}>
                      <span style={{ color: TURQ, fontWeight: 600, fontSize: 11.5, ...ellipsis }}>{m.type}</span>
                      <span style={ellipsis}>{m.what}</span>
                      <span style={{ color: MUTED, fontSize: 11.5, whiteSpace: "nowrap" }}>{[m.owner, m.status].filter(Boolean).join(" · ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tier === "phone" && watch && (
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 10, minWidth: 0 }}>
                <span style={{ fontSize: 26, fontWeight: 600, color: TURQ, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
                  {watch.value}
                  <span style={{ fontSize: 13, fontWeight: 500, marginLeft: 3 }}>{watch.unit ?? ""}</span>
                </span>
                <span style={{ fontSize: 12, color: MUTED, ...ellipsis }}>
                  {watch.label}
                  {watch.delta ? ` · ${watch.delta}` : ""}
                </span>
              </div>
            )}
          </div>

          {tier !== "phone" && (
            <div style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 8 }}>
              {watch ? (
                <div style={{ minWidth: 0 }}>
                  <Label>{watch.label}</Label>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 }}>
                    <span style={{ fontSize: roomy ? 64 : dense ? 40 : 48, lineHeight: 0.95, fontWeight: 600, letterSpacing: "-0.03em", color: TURQ, fontVariantNumeric: "tabular-nums" }}>
                      {watch.value}
                    </span>
                    <span style={{ fontSize: 13, color: MUTED }}>{watch.unit ?? ""}</span>
                  </div>
                  {watch.delta && <div style={{ fontSize: 12, color: AMBER, marginTop: 4, ...ellipsis }}>{watch.delta}</div>}
                </div>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// The work line: five cells joined by a thread. The constraint cell is filled; its label says "work waits here".
function WorkLine({ steps, constraint, tier, dense, roomy }: { steps: GoalStep[]; constraint: string; tier: Tier; dense: boolean; roomy: boolean }) {
  const maxWait = Math.max(1, ...steps.map((s) => s.medianWaitDays));
  const barH = roomy ? 44 : dense ? 22 : 26;
  const cols = steps.map(() => "minmax(0, 1fr)").join(" ");
  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: cols, gap: tier === "phone" ? 4 : 8, alignItems: "stretch", minWidth: 0, flex: "none" }}>
      {steps.map((s, i) => {
        const isC = s.name === constraint;
        const h = Math.max(4, Math.round((s.medianWaitDays / maxWait) * barH));
        return (
          <div key={i} style={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "flex-end", height: barH, marginBottom: 6 }}>
              <div
                aria-label={`${s.name}: median wait ${s.medianWaitDays} days`}
                style={{
                  width: "100%",
                  height: h,
                  background: isC ? TURQ : "#2a5570",
                  borderRadius: "3px 3px 0 0",
                }}
              />
            </div>
            <div
              style={{
                borderTop: `2px solid ${isC ? TURQ : "#2a5570"}`,
                paddingTop: 5,
                minWidth: 0,
              }}
            >
              <div style={{ fontSize: tier === "phone" ? 11.5 : 12.5, fontWeight: 600, color: isC ? TURQ : INK, ...ellipsis }}>{s.name}</div>
              <div style={{ fontSize: tier === "phone" ? 11 : 12, color: MUTED, marginTop: 2, ...ellipsis }}>
                <span style={{ color: INK, fontVariantNumeric: "tabular-nums" }}>{s.open}</span> open
              </div>
              <div style={{ fontSize: tier === "phone" ? 11 : 12, color: isC ? TURQ : MUTED, ...ellipsis }}>
                <span style={{ fontVariantNumeric: "tabular-nums", color: isC ? TURQ : INK }}>{s.oldestDays}d</span> oldest
              </div>
              {isC && <div style={{ fontSize: tier === "phone" ? 10.5 : 11, color: TURQ, marginTop: 1, ...ellipsis }}>{tier === "phone" ? "waits here" : "work waits here"}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
