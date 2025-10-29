import "./Navigation.css";
// @ts-expect-error bla bla
import gmailLogo from "../../assets/logo_gmail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faSliders } from "@fortawesome/free-solid-svg-icons/faSliders";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons/faCircleQuestion";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { GridIcon } from "../../assets/grid-icon";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-item-left">
        <button className="navigation-button">
          <FontAwesomeIcon icon={faBars} color="white" size="xl" />
        </button>
        <a href="/">
          <img src={gmailLogo} className="logo-gmail" />
        </a>
      </div>

      <div className="navigation-item-center">
        <div className="search-bar-wrapper">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon-magnifying-glass"
          />
          <input className="search-bar" placeholder="Hľadať v pošte"></input>
          <FontAwesomeIcon icon={faSliders} className="icon-sliders" />
        </div>
      </div>
      <div className="navigation-item-right">
        <button className="navigation-button">
          <FontAwesomeIcon icon={faCircleQuestion} color="white" size="xl" />
        </button>
        <button className="navigation-button">
          <FontAwesomeIcon icon={faGear} color="white" size="xl" />
        </button>
        <button className="navigation-button">
          <GridIcon />
        </button>
        <button className="avatar">AŠ</button>
      </div>
    </div>
  );
}
