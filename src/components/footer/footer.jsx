import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left-container">
        <div className="footer__logo" />
        <p className="footer__text">© 2022 Группа компаний HeadHunter</p>
      </div>
      <div className="footer__right-container">
        <div className="footer__links-container-1">
          <div className="footer__link footer__link-tg" />
          <div className="footer__link footer__link-vk" />
          <div className="footer__link footer__link-ok" />
        </div>
        <div className="footer__links-container-2">
          <div className="footer__link footer__link-phone" />
          <div className="footer__link footer__link-message" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
