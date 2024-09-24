import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleNavLinkClick = (link) => {
    setActive(link.title);
    setToggle(false);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-amber-500' : 'text-white'
              } hover:text-amber-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavLinkClick(link)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={handleToggle}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-[#1d1836] to-[#5b005c] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-amber-500' : 'text-white'
                  } hover:text-amber-500 font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleNavLinkClick(link)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
