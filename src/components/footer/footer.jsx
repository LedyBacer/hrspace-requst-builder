import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left-container">
        <div className="footer__logo" />
        <p className="footer__text">© 2022 Группа компаний HeadHunter</p>
      </div>
      <div className="fooer__right-container">
        <div className="footer__links-container" />
      </div>
    </footer>
  );
}

export default Footer;