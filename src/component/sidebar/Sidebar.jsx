import React from 'react';
import '../sass/styles.css'
import Adminicon from '../images/adminLogo.png'
import chartIcon from '../images/chartIcon.png'
import referralIcon from '../images/referralsIcon.png'
import transactionIcon from '../images/transactionIcon.png'
import payoutIcon from '../images/payoutIcon.png'
import homeIcon from '../images/homeIcon.png'
import settingIcon from '../images/settingsIcon.png'

const Sidebar = () => {
    document.title = 'Admin Dashboard'
    return (
        <nav className='navBar'>
            <div className="navLogo">
                <img src={Adminicon} alt="" />
                <h4>Language  Acad</h4>
            </div>
            <ul className="navItems">
                <li className="navList">
                    <img src={chartIcon} alt="" />
                    <span>Charts</span>
                </li>
                <li className="navList">
                    <img src={referralIcon} alt="" />
                    <span>Referrals</span>
                </li>
                <li className="navList">
                    <img src={transactionIcon} alt="" />
                    <span>Transcations</span>
                </li>
                <li className="navList">
                    <img src={payoutIcon} alt="" />
                    <span>Payouts</span>
                </li>
            </ul>
            <ul className="secondnavItems navItems">
                <li className="navList">
                    <img src={settingIcon} alt="" />
                    <span>Settings</span>
                </li>
                <li className="navList">
                    <img src={homeIcon} alt="" />
                    <span>Home</span>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
