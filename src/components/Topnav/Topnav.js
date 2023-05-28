import "./Topnav.scss";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/BrainFlix-logo.svg";

function Topnav() {
  const navigateTo = useNavigate();

  return (
    <>
      <section className="topnav">
        <div className="topnav__wrapper">
          <Link to="/" className="topnav__logo-link">
            <img className="topnav__logo" src={logo} alt="Topnav Logo" />
          </Link>

          <form className="topnav__form">
            <div className="form__field">
              <input
                className="topnav__search icon icon--search"
                type="text"
                name="search"
                placeholder="Search"
              />
              <div className="topnav__avatar"></div>
            </div>
            <button
              className="topnav__button icon icon--upload"
              type="button"
              onClick={() => navigateTo("/upload")}
            >
              upload
            </button>
            <div className="topnav__avatar topnav__avatar--lg"></div>
          </form>
        </div>
      </section>
      <div className="divider divider--no-margin"></div>
    </>
  );
}

export default Topnav;
