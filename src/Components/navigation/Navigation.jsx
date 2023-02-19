import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation-list'>
      <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} >Home</NavLink>
      <NavLink to='about' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
      <NavLink to='services' className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
      <NavLink to='skills' className={({isActive}) => isActive ? 'active' : ''}>Skills</NavLink>
      <NavLink to='education' className={({isActive}) => isActive ? 'active' : ''}>Education</NavLink>
      <NavLink to='experience' className={({isActive}) => isActive ? 'active' : ''}>Experience</NavLink>
      <NavLink to='blog' className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink>
      <NavLink to='contact' className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
    </nav>
  );
};

export default Navigation