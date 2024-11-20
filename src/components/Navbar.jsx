import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/insplogo.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
      <nav className="bg-white text-black font-semibold py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
          </div>

          {/* Right Section: Links */}
          <ul className="flex space-x-6 text-lg">
            <li>
              <NavLink
                  to="/"
                  className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-gray-900"
                  }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/about"
                  className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-gray-900"
                  }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/services"
                  className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-gray-900"
                  }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                      isActive ? "text-blue-600" : "text-gray-900"
                  }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
