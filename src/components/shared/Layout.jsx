import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
  return (
    <div className='flex bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
      <div>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Layout
