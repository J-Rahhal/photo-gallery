import React from "react";
import "../index.css";

const MobileNav = () => {
  return (
    <div className="h-screen bg-black aboslute w-full text-white flex justify-center text-2xl items-center">
      <ul className="text-center mobile-link">
        <li className="mobile-link">
          <a>About</a>
        </li>
        <li className="mobile-link">
          <a>Exhibition</a>
        </li>
        <li className="mobile-link">
          <a>Artist</a>
        </li>
        <li className="mobile-link">
          <a>Collections</a>
        </li>
        <li className="mobile-link">
          <a>Events</a>
        </li>
        <li className="mobile-link">
          <a>Content</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
