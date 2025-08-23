import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from '../../assets/chepec-1.png';
import menuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 850 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menu, setmenu] = useState(false);
  const toggleMenu = () => {
    menu ? setmenu(false) : setmenu(true);
  };

  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <img src={menuIcon} alt="" />
      </div>
      <nav
        className={`nav_container ${menu ? "" : "hide-menu"} ${
          sticky ? "navbar " : ""
        }`}
      >
        {/* ------------------ link list--------------- */}
        {/* <div className="hamburger" onClick={toggleMenu}>
        <img src={menuIcon} alt="icon" />
      </div> */}
        {/* ------------------ logo--------------- */}
        <div className="logo">
          <img src={logo} width="150px" />
        </div>
        {/* ------------------ link list--------------- */}
        {/* <div className={`bookmarks ${sticky ? "navbar " : ""}`}> */}
        <div className='bookmarks'>
          <ul>
            <li>
              <a href="#heroID">Home</a>
            </li>
            <li>
              <a href="#servicesID">Services</a>
            </li>
            <li>
              <a href="#processesID">Process</a>
            </li>
            <li>
              <a href="#testimonialsID">Testimonials</a>
            </li>
            <li>
              <a href="#faqID">FAQs</a>
            </li>
            <li>
           <button className="navbar_btn">   <a href="#contactID">Contact us</a>s</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
