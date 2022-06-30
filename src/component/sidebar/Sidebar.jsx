import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import '../sass/styles.css'
import sidebarContent from '../mapJs/Sidebar';
import { Link } from 'react-router-dom';

const Sidebar = ({ isMobile, handleMobileMenu }) => {
    document.title = 'Admin Dashboard';

    return (
        <nav className='sidebar'>
            {sidebarContent.map((content, index) => (
                <div className={` ${isMobile ? "open" : "navBar"}`} key={index}>
                    <div className="navLogo">
                        <img src={content.title.image} alt="" />
                        <h4>{content.title.text}</h4>
                    </div>
                    <span className='bars' onClick={handleMobileMenu}>
                        {isMobile ? <FaTimes /> : <FaBars />}
                    </span>
                    <ul className='navItems'>
                        {content.navOne.map((link, index) => (
                            <li className="navList" key={index} onClick={handleMobileMenu}>
                                <Link to={link.route}>
                                    {link.Icon}
                                    <span>{link.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="secondnavItems navItems" >
                        {content.navTwo.map((secondlink, index) => (
                            <li className="navList" key={index} onClick={handleMobileMenu}>
                                <Link to={secondlink.route}>
                                    {secondlink.Icon}
                                    <span>{secondlink.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    )
}
export default Sidebar