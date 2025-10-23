import { Mail } from "../../types/Mail";
import "./InboxMailList.css";

interface Props {
  mailList: Mail[];
}

export function InboxMailList(props: Props) {
  function getEmailReceiveTime(time: string) {
    const receiveTime = new Date(time);
    const now = new Date();

    if (
      receiveTime.getDate() === now.getDate() &&
      receiveTime.getMonth() === now.getMonth() &&
      receiveTime.getFullYear() === now.getFullYear()
    ) {
      return receiveTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } else {
      return receiveTime.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  }

  return (
    <div>
      {props.mailList.map((mail) => (
        <div className="inbox-mailing-item">
          <div className="inbox-mailing-item-title-receive-time">
            <div className="inbox-mailing-checkbox-title-wrapper">
              <input
                type="checkbox"
                className="inbox-navigation-checkbox"
                checked={mail.isChecked}
              ></input>
              <div className="inbox-mail-title-description">
                <p className="inbox-mail-title">{mail.title}</p>
                <p>{mail.description}</p>
              </div>
            </div>
            <p className="inbox-receive-time">
              {getEmailReceiveTime(mail.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
