import React from "react";
import PropTypes from "prop-types";
import "./app-header-navigation.scss";

function AppHeaderNavigation({ children }) {
  return (
    <nav className="appHeaderNavigation">
      <ul className="appHeaderNavigation__nav-ul">
        <li className="appHeaderNavigation__nav-li">{children}</li>
      </ul>
    </nav>
  );
}

AppHeaderNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppHeaderNavigation;
