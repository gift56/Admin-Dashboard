import React from 'react'
import Images from '../mapJs/Image'
import Header from '../Header'
import '../sass/styles.css'

const Chart = () => {
    return (
        <section className='flexArea paddingCon'>
            <Header
                title='Charts'
                firstImg={Images.searchIcon}
                secondImg={Images.notificationIcon}
                names='John Kent'
                profileImg={Images.NewProfile}
            />
        </section>
    )
}

export default Chart
