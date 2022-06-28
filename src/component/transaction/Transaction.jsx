import React from 'react'
import Images from '../mapJs/Image'
import Header from '../Header'
import '../sass/styles.css'

const Transaction = () => {
    return (
        <section className='flexArea paddingCon'>
            <Header
                title='Transcations'
                firstImg={Images.searchIcon}
                secondImg={Images.notificationIcon}
                names='John Kent'
                profileImg={Images.NewProfile}
            />
            <div className="transactionArea Card">
                <div className="transactionHeader">
                    <h3>All transcations</h3>
                    <div className="headerSorts">
                        <div className="sort">
                            <img src={Images.sort} alt="" />
                            <span>Sort</span>
                        </div>
                        <div className="filter">
                            <img src={Images.funnel} alt="" />
                            <span>Filter</span>
                        </div>
                    </div>
                </div>
                <div className="transactionTable">
                        {/* <div className="tableHeading">
                            <h3>Ticket details</h3>
                            <h3>Ticket details</h3>
                            <h3>Ticket details</h3>
                            <h3>Ticket details</h3>
                        </div> */}
                        {/* <div className="tableData">
                            <div className="data">
                                <div className="dataProfile">
                                    <img src={Images.user1} alt="" />
                                    <div className="userName">
                                        <h4>Contact Email not Linked</h4>
                                        <p>Updated 1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
            </div>
        </section>
    )
}

export default Transaction
