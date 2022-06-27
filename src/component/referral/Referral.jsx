import React from 'react'
import Images from '../mapJs/Image'
import Header from '../Header'
import '../sass/styles.css'

const Referral = () => {
    return (
        <section className='ReferralsArea flexArea paddingCon'>
            <Header
                title='Referrals'
                firstImg={Images.searchIcon}
                secondImg={Images.notificationIcon}
                names='John Kent'
                profileImg={Images.profileImg}
            />
            <div className='Card referralsCard'>
                <h4>All referrals</h4>
            </div>
        </section>
    )
}

export default Referral
