// import { NavLink } from "react-router-dom";
import React from "react";

function AppHeaderNavigation(props) {
  return (
    <nav className="appHeaderNavigation__navigation">
      <ul className="appHeaderNavigation__nav-ul">
        <li className="appHeaderNavigation__nav-li">{props.children}</li>
      </ul>
    </nav>
  );
}

export default AppHeaderNavigation;
