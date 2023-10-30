import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../navigation';
import adw from '../assets/logo putih.png';
import { BsBoxArrowRight } from 'react-icons/bs';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const activeLink = 'text-orange-500';
  const normaLink = '';

  return (
    <div className=" flex flex-col bg-blue-800 w-[20%] h-screen md:overflow-auto sm:overflow-auto">
      <div className=" mx-auto my-5 w-[30%] h-[50%] flex flex-row space-x-5">
        <Link>
          <img src={adw} alt="" />
        </Link>
      </div>

      <div className=" mx-5 mt-[-140px] md:my-8">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <NavLink to={item.path} key={item.key}>
            <div className=" text-white flex items-center space-x-3 my-5 hover:text-orange-400 rounded-md">
              {item.icon}
              <p className=" ">{item.label}</p>
              <div className=" mx-5 flex items-center">
                <BsBoxArrowRight />
              </div>
            </div>
          </NavLink>
          
        ))}
      </div>

      <div className=" mx-5 mt-[175px] ">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <NavLink to={item.path} key={item.key} className={({ isActive }) => (isActive ? activeLink : normaLink)}>
            <div className=" text-white flex items-center space-x-3 my-5 hover:text-orange-400 rounded-md">
              {item.icon}
              <p className=" ">{item.label}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
