import React from 'react'
import Images from '../mapJs/Image'
import Header from '../Header'
import '../sass/styles.css'

const Settings = () => {
    return (
        <section className='profileArea flexArea paddingCon'>
            <Header
                title='My Profile'
                firstImg=" "
                secondImg={Images.notificationIcon}
                names='John Kent'
                profileImg={Images.profileImg}
            />
            <div className="Card editCard">
                <div className="editProfile">
                    <p className="text">Edit Profile</p>
                    <form action="" className="form">
                        <div className="formControl">
                            <label htmlFor="editProfile" className="imgLabel">
                                <img src={Images.smilingBoy} alt="" className="profileImg" />
                                <img src={Images.editImg} alt="" className="editPen" />
                            </label>
                            <input
                                type="file"
                                id="editProfile"
                                style={{ display: "none" }}
                                accept="*.png *.jpg *.jpeg"
                            />
                        </div>
                        <div className="formControl">
                            <label htmlFor="name" className="label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="formControl">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="formControl">
                            <label htmlFor="dob" className="label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="Enter your Date of Birth"
                            />
                        </div>
                        <div className="formControl">
                            <label htmlFor="phone" className="label">
                                Phone Number
                            </label>
                            <input
                                type="telephone"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="formControl">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Settings