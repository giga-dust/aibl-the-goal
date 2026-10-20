import { useEffect, useState } from "react";
import { FrameRoot } from "@dust/frame";
import { useFile } from "@dust/react-hooks";
import { theme } from "./theme";
import { BannerView, type TheGoalData } from "./BannerView";

// Pod banner for a The Goal Pod. Renders ./data.json, written by the Monday constraint brief. No tool calls.
export default function App() {
  const file = useFile("./data.json");
  const [data, setData] = useState<TheGoalData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "empty" | "error">("loading");
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    if (!file) return;
    file
      .text()
      .then((txt) => {
        if (cancelled) return;
        const parsed = JSON.parse(txt) as TheGoalData;
        const empty = !parsed || !(parsed.steps ?? []).length;
        setData(parsed);
        setStatus(empty ? "empty" : "ok");
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setStatus("error");
        setMessage(`data.json could not be read: ${e instanceof Error ? e.message : "unknown error"}`);
      });
    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <FrameRoot theme={theme}>
      <BannerView data={status === "ok" ? data : null} status={status} message={message} />
    </FrameRoot>
  );
}
