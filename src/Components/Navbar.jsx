

import React from 'react';
import { useRef } from 'react';
import logo from './arna.png';

import './style.css';
import { faHome, faInfo, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming usage in CSS
import { menu } from "./Data";


const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const barRef = useRef();
  

  const searchHandler = () => {
   searchRef.current.classList.toggle("active");
   cartRef.current.classList.remove('active');
   navbarRef.current.classList.remove('active');
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle('active');
    navbarRef.current.classList.remove('active');
    searchRef.current.classList.remove("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle('active');
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove('active');
  };



  return (
    <header className='header'>
      <a href='#' className='logo'>
        <img src={logo} alt='' />
      </a>
      <nav className="navbar" ref={navbarRef}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#menu'>Menu</a>
        <a href='#products'>Products</a>
        <a href='#reviews'>Reviews</a>
        <a href='#contacts'>Contacts</a>
        <a href='#blogs'>Blogs</a>
      </nav>
      <div className="icons">                 
        <div className="fas fa-search" onClick={searchHandler}></div>
        <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
        <div className="fas fa-bars" onClick={navbarHandler}></div>
      </div>
      <div className="search-form" ref={searchRef}>
        <input type="search" placeholder="Search here...." id="search-box"/>
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
      <div className="cart-items-container" ref={cartRef}>
        {menu.map((item, index) => (
          <div className="cart-item" key={index}>
            <span className="fas fa-times"></span>
            <img src={item.img} alt="" />
            <div className="content">
              <h3>Arna (Small)</h3>
              <div className="price">Rs 200</div>
            </div>
          </div>
        ))}
          <button className="btn btn-yellow">Get Yours Now</button>
       
      </div>

      <div className="bar-item-container" ref={
        barRef
      } >


     </div>
  



    </header>
  );
};

export default Navbar;

