import React from "react";
import PropTypes from "prop-types";
import "./navigation.scss";

function Navigation({ children }) {
  return (
    <nav className="navigation">
      <ul className="navigation__nav-ul">
        <li className="navigation__nav-li">{children}</li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
