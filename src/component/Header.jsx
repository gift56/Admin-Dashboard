import React from 'react'

const Header = ({ title, firstImg, secondImg, names, profileImg }) => {
    return (
        <header className='header paddingCon'>
            <div className="headerTitle">
                <h2>{title}</h2>
            </div>
            <div className="images">
                <div className="headerImgs">
                    {firstImg && <img src={firstImg} alt="" />}
                    {secondImg && <img src={secondImg} alt="" />}
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
