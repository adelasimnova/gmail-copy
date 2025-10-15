import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Inbox.css";
import { faInbox, faTag, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Mail } from "../../types/Mail";
import { getPrimaryMails, getPromotionsMails, getSocialMails } from "../../api";
import { InboxMailList } from "../inbox-mail-list/InboxMailList";

export function Inbox() {
  const [activeTab, setActiveTab] = useState<
    "primary" | "promotions" | "social"
  >("primary");

  const [mails, setMails] = useState<Mail[]>([]);

  useEffect(() => {
    if (activeTab === "primary") {
      getPrimaryMails().then((data) => {
        // @ts-expect-error bbb
        setMails(data.mails);
      });
    } else if (activeTab === "promotions") {
      getPromotionsMails().then((data) => {
        // @ts-expect-error bbb
        setMails(data.mails);
      });
    } else {
      getSocialMails().then((data) => {
        // @ts-expect-error bbb
        setMails(data.mails);
      });
    }
  }, [activeTab]);

  function getTabClass(tabType: "primary" | "promotions" | "social") {
    if (activeTab === tabType) {
      return "inbox-tab-button inbox-tab-button-active";
    } else {
      return "inbox-tab-button";
    }
  }

  // predosla funkcia sa da zapisat aj "jednoduchsie" priamo do returnu ku kazdemu buttonu
  // className={activeTab === "primary" ? "inbox-tab-button inbox-tab-button-active" : "inbox-tab-button"}
  // className={activeTab === "promotions" ? "inbox-tab-button inbox-tab-button-active" : "inbox-tab-button"}
  // className={activeTab === "social" ? "inbox-tab-button inbox-tab-button-active" : "inbox-tab-button"}

  function handleOnPrimaryClick() {
    setActiveTab("primary");
  }

  function handleOnPromotionsClick() {
    setActiveTab("promotions");
  }

  function handleOnSocialClick() {
    setActiveTab("social");
  }

  // predosle funkcie viem zapisat aj takto, aby som sa neopakovala:
  // onClick={() => setActiveTab("primary")}
  // onClick={() => setActiveTab("promotions")} ...

  return (
    <div className="inbox">
      <div className="inbox-tab-wrapper">
        <div className="inbox-tab">
          <button
            className={getTabClass("primary")}
            onClick={handleOnPrimaryClick}
          >
            <FontAwesomeIcon icon={faInbox} className="icon-pencil" />
            Primary
          </button>
        </div>
        <div className="inbox-tab">
          <button
            className={getTabClass("promotions")}
            onClick={handleOnPromotionsClick}
          >
            <FontAwesomeIcon icon={faTag} className="icon-pencil" />
            Promotions
          </button>
        </div>
        <div className="inbox-tab">
          <button
            className={getTabClass("social")}
            onClick={handleOnSocialClick}
          >
            <FontAwesomeIcon icon={faUserGroup} className="icon-pencil" />
            Social
          </button>
        </div>
      </div>
      <InboxMailList mailList={mails} />
    </div>
  );
}
