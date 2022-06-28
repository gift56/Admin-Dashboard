import React from 'react'
import Header from '../Header'
import Images from '../mapJs/Image'
import '../sass/styles.css'
import Transactions from '../mapJs/Transaction'

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
                    <div className="tableHeading">
                        <h3>Ticket details</h3>
                        <h3>Customer name</h3>
                        <h3>Date</h3>
                        <h3>Priority</h3>
                    </div>
                    <div className="tableData">
                        {Transactions.map((data, index) => (
                            <div className="data" key={index}>
                                <div className="dataProfile">
                                    <img src={data.img} alt="" />
                                    <div className="userUpdate">
                                        <h4>{data.profileText}</h4>
                                        <p>{data.profileTime}</p>
                                    </div>
                                </div>
                                <div className="customerName">
                                    <h4>{data.customerName}</h4>
                                    <p>{data.customerDetail}</p>
                                </div>
                                <div className="date">
                                    <h4>{data.dateProfile}</h4>
                                    <p>{data.dateTime}</p>
                                </div>
                                <div className={(data.priority == "normal") ? "priority normal" : (data.priority == "low" ? "priority low" : "priority high")}>
                                    <button className='btn High'>{data.buttonText}</button>
                                </div>
                                <div className="sideIcon">
                                    <img src={data.sideMenu} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rowPage">
                        <p className="rowP">
                            Rows per <br /> page:
                        </p>
                        <p className="dropdown">
                            8 <img src={Images.dropDown} alt="" />
                        </p>
                        <p className="totalPages">
                            1-8 of 1240
                        </p>
                        <div className="prevNexIcon">
                            <img src={Images.left} alt="" />
                            <img src={Images.right} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transaction
