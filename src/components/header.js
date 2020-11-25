import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark fixed-top  bg-dark ">
      <Link className="navbar-brand" to="/">
        Company Name
      </Link>
      <ul className="navbar-nav d-flex flex-row">
        <li className="p-2">
          <Link className="text-white" to="/">
            Home
          </Link>
        </li>
        <li className="p-2">
          <Link className="text-white" to="/about">
            About
          </Link>
        </li>
        <li className="p-2">
          <Link className="text-white" to="/inbox/123">
            Inbox
          </Link>
        </li>
        <li className="p-2">
          <Link className="text-white" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
