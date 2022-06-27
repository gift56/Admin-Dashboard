import React from 'react'
import Images from '../mapJs/Image'
import Header from '../Header'
import '../sass/styles.css'

const Settings = () => {
    return (
        <section className='profileArea flexArea paddingCon'>
            <Header
                title='My Profile'
                firstImg={""}
                secondImg={Images.notificationIcon}
                names='John Kent'
                profileImg={Images.profileImg}
            />
            <div className="Card">
                <div className="editProfile">
                    <p className="text">Edit Profile</p>
                </div>
            </div>
        </section>
    )
}

export default Settings