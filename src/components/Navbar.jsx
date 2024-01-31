import React, {useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';
import { SectionWrapper } from '../hoc';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <Link 
          to="/" // this links to the top of the page
          className="flex items-center gap-2" // Corrected 'className' here
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >  
          <img src={logo} alt="logo" className="w-30 h-9 object-contain"/>
          <p className="text-white  text-[18px] font-bold cursor-pointer"
          
          ><span className="sm:block hidden"
          >  </span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li 
              key={Link.id}
              className={`${
                active === Link.title 
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[25px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
              >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // ? = if, : = then 
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20
          right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            
          </div> 
        </div>
      </div>
    </nav>
  );
}
export default Navbar;