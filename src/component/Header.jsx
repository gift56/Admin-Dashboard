import React from 'react'

const Header = ({ title, firstImg, secondImg, names, profileImg }) => {
    return (
        <header className='header'>
            <div className="headerTitle">
                <h2>{title}</h2>
            </div>
            <div className="images">
                <div className="headerImgs">
                    <img src={firstImg} alt="" />
                    <img src={secondImg} alt="" />
                </div>
                <div className="profileArea">
                    <p>{names}</p>
                    <img src={profileImg} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
