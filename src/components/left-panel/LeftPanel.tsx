import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import "./LeftPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons/faInbox";

export function LeftPanel() {
  return (
    <div className="left-panel">
      <button className="new-message-button">
        <FontAwesomeIcon icon={faPencil} className="icon-pencil" />
        <span>Napísať</span>
      </button>
      <button className="inbox-button">
        <FontAwesomeIcon icon={faInbox} className="primary-icon-left-panel" />
        <span>Doručené</span>
      </button>
    </div>
  );
}
