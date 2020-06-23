import React from 'react';
import '../contents/App.css';
import logo from './logo.svg';

const Navigation = () => {
  return (
      <nav className="flex pa2 justify-between items-center">
        <img src={logo} className="grow logo" width="250px" alt="logo magic ai" />
        <p className='f4-l pb2 f5 dim link grow black underline ph3 pointer'>Sign Out</p>
      </nav>
  )
}

export default Navigation;