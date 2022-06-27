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
            <div className="ChartBox">
                <div className="Card boxes">
                    <h3>Unresolved</h3>
                    <p>60</p>
                </div>
                <div className="Card boxes">
                    <h3>Overdue</h3>
                    <p>16</p>
                </div>
                <div className="Card boxes">
                    <h3>Open</h3>
                    <p>43</p>
                </div>
                <div className="Card boxes">
                    <h3>On hold</h3>
                    <p>64</p>
                </div>
            </div>
        </section>
    )
}

export default Chart
