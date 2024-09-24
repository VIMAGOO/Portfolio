// Importing necessary libraries and assets
import React, { useState } from 'react'; // React and useState for state management
import { Link } from 'react-router-dom'; // Link for routing between pages
import { styles } from '../styles'; // Importing custom styles
import { navLinks } from '../constants'; // Importing navigation links data
import { logo, menu, close } from '../assets'; // Importing logo and menu icons

// Navbar component definition
const Navbar = () => {
  // State to manage the currently active link and toggle for mobile menu
  const [active, setActive] = useState(''); // Active link state
  const [toggle, setToggle] = useState(false); // Mobile menu toggle state

  // Function to toggle the mobile menu visibility
  const handleToggle = () => {
    setToggle(!toggle); // Toggle the current state
  };

  // Function to handle navigation link click
  const handleNavLinkClick = (link) => {
    setActive(link.title); // Set the active link
    setToggle(false); // Close the mobile menu
  };

  return (
    // Navigation bar wrapper with styles and positioning
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and home link */}
        <Link to="/" className="flex items-center gap-2" onClick={() => { 
          setActive(''); // Reset active link on home click
          window.scrollTo(0, 0); // Scroll to top
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> {/* Logo image */}
        </Link>

        {/* Navigation links for larger screens */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id} // Unique key for each list item
              className={`${
                active === link.title ? 'text-amber-500' : 'text-white' // Active link styling
              } hover:text-amber-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavLinkClick(link)} // Handle link click
            >
              <a href={`#${link.id}`}>{link.title}</a> {/* Link to section */}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Switch between close and menu icon based on toggle state
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={handleToggle} // Toggle menu on click
          />
          {/* Mobile menu links */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-[#1d1836] to-[#5b005c] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id} // Unique key for each mobile list item
                  className={`${
                    active === link.title ? 'text-amber-500' : 'text-white' // Active link styling
                  } hover:text-amber-500 font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleNavLinkClick(link)} // Handle link click
                >
                  <a href={`#${link.id}`}>{link.title}</a> {/* Link to section */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Navbar component
export default Navbar;
