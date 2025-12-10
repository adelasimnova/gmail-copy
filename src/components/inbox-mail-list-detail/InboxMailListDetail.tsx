import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "../../types/Mail";
import "./InboxMailListDetail.css";
import {
  faArrowUpRightFromSquare,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  selectedItem: Mail | null;
}

export function InboxMailListDetail(props: Props) {
  if (props.selectedItem === null) {
    return (
      <div className="inbox-column inbox-column-detail">
        Nie sú zvolené žiadne konverzácie
      </div>
    );
  } else {
    return (
      <div className="inbox-column inbox-column-detail">
        <div className="inbox-column-detail-title-icons">
          <p className="inbox-column-detail-title">
            {props.selectedItem.title}
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPrint}
              className="inbox-column-detail-icon"
            />
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="inbox-column-detail-icon"
            />
          </div>
        </div>
        <div className="inbox-column-detail-sender-info-date-row">
          <p>{props.selectedItem.senderName}</p>
          <p>{"<" + props.selectedItem.senderEmail + ">"}</p>
          <p>{props.selectedItem.createdAt}</p>
        </div>
        <p className="inbox-column-detail-description">
          {props.selectedItem.description}
        </p>
      </div>
    );
  }
}
