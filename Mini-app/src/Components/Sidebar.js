import React from 'react';
import { FaHome, FaUser, FaQuoteRight, FaSignOutAlt } from 'react-icons/fa';

const menuArray = ["My Moves", "My Profile", "Get Quotes", "Logout"];

const iconArray = [FaHome, FaUser, FaQuoteRight, FaSignOutAlt];

const Sidebar = () => {
  return (
    <div className="sidebar col-sm-3">
      <div className="logo">
        <h2>My Logo</h2>
      </div>
      <ul className="menu">
        {menuArray.map((item, index) => {
          const Icon = iconArray[index];
          return (
            <li key={index} className="menu-item">
              <a href="#">
                <Icon className="menu-icon" />
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
