import logo from "../../assets/images/BrainFlix-logo.svg";

import "./Topnav.scss";

function Topnav() {
  return (
    <section className="topnav">
      <div className="page__section">
        <img className="topnav__logo" src={logo} alt="Topnav Logo" />

        <form className="topnav__form">
          <div className="topnav__form--flex">
            <input
              className="topnav__search"
              type="text"
              name="search"
              placeholder="search"
            />
            <div className="topnav__avatar1"></div>
          </div>

          <button className="topnav__button">upload</button>
          <div className="topnav__avatar2"></div>
        </form>
      </div>
    </section>
  );
}

export default Topnav;
