import "./App.css"
import { Inbox } from "../inbox/Inbox";
import { LeftPanel } from "../left-panel/LeftPanel";
import Navigation from "../navigation/Navigation";
import { RightPanel } from "../right-panel/RightPanel";

export default function App() {
  return <>
      <Navigation />
    <div className="page-body">
      <LeftPanel />
      <Inbox />
    </div>
    </>;
}
