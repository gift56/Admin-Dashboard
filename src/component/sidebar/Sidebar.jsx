import React from 'react';
import '../sass/styles.css'
import sidebarContent from '../mapJs/Sidebar';

const Sidebar = () => {
    document.title = 'Admin Dashboard';
    return (
        <nav className='sidebar'>
            {sidebarContent.map((content, index) => (
                <div className='navBar' key={index}>
                    <div className="navLogo">
                        <img src={content.title.image} alt="" />
                        <h4>{content.title.text}</h4>
                    </div>
                    <ul className="navItems">
                        {content.navOne.map((link, index) => (
                            <li className="navList" key={index}>
                                <img src={link.image} alt="" />
                                <span>{link.text}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="secondnavItems navItems" >
                        {content.navTwo.map((secondlink, index) => (
                            <li className="navList" key={index}>
                                <img src={secondlink.image} alt="" />
                                <span>{secondlink.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    )
}

export default Sidebar
