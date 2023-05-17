import logo from "../../assets/images/BrainFlix-logo.svg";

import "./Topnav.scss";

function Topnav() {
  return (
    <section className="topnav">
      <div className="page__section">
        <img className="topnav__logo" src={logo} alt="Topnav Logo" />

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
          <button className="topnav__button icon icon--upload">upload</button>
          <div className="topnav__avatar topnav__avatar--lg"></div>
        </form>
      </div>
    </section>
  );
}

export default Topnav;
