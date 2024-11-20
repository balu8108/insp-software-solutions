import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/insplogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to dynamically set the tab title
  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/services":
        return "Services";
      case "/contact":
        return "Contact";
      default:
        return "INSP Software Solutions"; // Default title
    }
  };

  // Set the tab title whenever the route changes
  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  return (
      <nav className="bg-white text-black font-semibold py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
          </div>

          {/* Hamburger Icon (Mobile View) */}
          <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="text-gray-900 focus:outline-none"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <ul
              className={`lg:flex space-x-6 text-lg ${
                  isMenuOpen ? "block" : "hidden"
              } lg:block absolute lg:relative bg-white w-full lg:w-auto top-16 left-0 lg:top-0 lg:left-auto shadow-lg lg:shadow-none`}
          >
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
