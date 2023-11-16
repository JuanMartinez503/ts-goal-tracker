import { type ReactNode } from "react";



type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?:'low'|'medium'|'high'
  children: ReactNode;
};
export default function InfoBox({ mode, children,severity }: InfoBoxProps) {
  return (
    <>
      {mode === "hint" ? (
        <aside className="infobox infobox-hint">
          <p>{children}</p>
        </aside>
      ) : (
        <aside className={`infobox warning--${severity}`}>
          <h2>Warning</h2>
          <p>{children}</p>
        </aside>
      )}
    </>
  );
}
