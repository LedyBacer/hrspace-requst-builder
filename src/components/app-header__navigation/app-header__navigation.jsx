// import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

function AppHeaderNavigation({ children }) {
  return (
    <nav className="appHeaderNavigation__navigation">
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
