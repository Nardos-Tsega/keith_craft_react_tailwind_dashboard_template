import React from 'react';
import {HiOutlineLogout} from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../../../utilities/consts/navigation';
import classNames from 'classnames';
import Profile from '../../../assets/profile.jpg';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2  hover:no-underline text-sm h-12';

const Sidebar = () => {
  return (
    <div className='flex flex-col w-60 p-3 bg-[#223843] text-white'>
      <div className='flex flex-col justify-center items-center gap-2 px-1 py-3'>
        <img src={Profile} alt='user profile' className='rounded-full w-16'/>
        <span className='text-neutral-100'>KeithCraft</span>
      </div>
      <div className='flex-1 py-8 flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2'>
        {/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))} */}
        <div  className={classNames(linkClasses, 'cursor-pointer text-white bg-[#D77A61] rounded')}>
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

function SidebarLink({item}){
  const{pathname} = useLocation()
  return(
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-[#EFF1F3] text-[#223843] h-12' : 'text-white h-10', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default Sidebar
