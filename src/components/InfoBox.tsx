

import { type ReactNode } from "react";

type InfoBoxProps = {
    mode: 'hint'|'warning';
    children: ReactNode
}
export default function InfoBox({mode,children}:InfoBoxProps){

  return (
    <>
    {mode==='hint' ? <aside className="infobox infobox-hint">
    {children}
    </aside> :
    <aside className="infobox infobox-warning warning--medium">
        <h2>Warning</h2>
        {children}
        </aside>}
    </>
  )

}