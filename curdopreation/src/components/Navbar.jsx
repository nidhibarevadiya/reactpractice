import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaUserEdit,
  FaBars,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
        <div className="sidebar-header">
          <h2 className={`sidebar-logo ${!isSidebarOpen ? "hidden" : ""}`}>
            Flowbite
          </h2>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="toggle-btn"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <FaHome />
            {isSidebarOpen && "Home"}
          </NavLink>

          <NavLink
            to="/adduser"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <FaUserPlus />
            {isSidebarOpen && "Add User"}
          </NavLink>

          <NavLink
            to="/edituser"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <FaUserEdit />
            {isSidebarOpen && "Edit User"}
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <div className="top-navbar">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="user-button"
            >
              <FaUserCircle className="text-xl" />
              <span className="username">Admin</span>
            </button>

            {isDropdownOpen && (
              <div className="user-dropdown">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#" className="logout">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Navbar;
