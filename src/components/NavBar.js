import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="border-b-4 border-green-700 fixed top-0 bg-green-600 font-bold text-lg text-white">
      <ul>
        <li className="inline-block pt-4 pb-4">
          <Link to="/" className="pt-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/about" className="pt-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/article" className="pt-6 pr-8">
            Article
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/article-list" className="pt-6 pr-8">
            Articles List
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
