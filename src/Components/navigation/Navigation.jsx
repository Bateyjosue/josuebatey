import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation-list'>
      <Link to="home" >Home</Link>
      <Link to='about' className='nav-item'>About</Link>
      <Link to='services' className='nav-item'>Services</Link>
      <Link to='skills' className='nav-item'>Skills</Link>
      <Link to='education' className='nav-item'>Education</Link>
      <Link to='experience' className='nav-item'>Experience</Link>
      <Link to='blog' className='nav-item'>Blog</Link>
      <Link to='contact' className='nav-item'>Contact</Link>
    </nav>
  );
};

export default Navigation