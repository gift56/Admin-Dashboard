import React from 'react'
import Chartbox from '../mapJs/Chartbox'
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
                {Chartbox.map((box, index) => (
                    <div className="Card boxes" key={index}>
                        <h3>{box.text}</h3>
                        <p>{box.page}</p>
                    </div>
                ))}
            </div>
            <div className="graphArea Card">
                <div className="graph">
                    <div className="graphText">
                        <h3 className="graphTitle">Today’s trends</h3>
                        <p className="graphDate">as of 25 May 2019, 09:41 PM</p>
                    </div>
                    <div className="graphCodination">
                        <p><img src={Images.Minus} alt="" /> Toda<br />y</p>
                        <p><img src={Images.Minus} alt="" />Yesterda<br />y</p>
                    </div>
                    <img src={Images.Graph} alt="" className="graphImg" />
                </div>
                <div className="graphRates">
                    <div className="rates">
                        <h4>Resolved</h4>
                        <p>449</p>
                    </div>
                    <div className="rates">
                        <h4>Received</h4>
                        <p>426</p>
                    </div>
                    <div className="rates">
                        <h4>Average first response time</h4>
                        <p>33m</p>
                    </div>
                    <div className="rates">
                        <h4>Average response time</h4>
                        <p>3h 8m</p>
                    </div>
                    <div className="rates">
                        <h4>Resolution within SLA</h4>
                        <p>94%</p>
                    </div>
                </div>
            </div>
            <div className="ticketArea">
                <div className="ticketCard Card">
                    <div className="ticketHeading">
                        <div className="title">
                            <h3 className="ticketTitle">Unresolved tickets</h3>
                            <p>Group: <span>Support</span></p>
                        </div>
                        <div className="details">
                            <p>View <br /> details</p>
                        </div>
                    </div>
                    <div className="infoItems">
                        <div className="infoItem">
                            <h4>Waiting on Feature Request</h4>
                            <p>4238</p>
                        </div>
                        <div className="infoItem">
                            <h4>Awaiting Customer Response</h4>
                            <p>1005</p>
                        </div>
                        <div className="infoItem">
                            <h4>Awaiting Developer Fix</h4>
                            <p>914</p>
                        </div>
                        <div className="infoItem">
                            <h4>Pending</h4>
                            <p>281</p>
                        </div>
                    </div>
                </div>
                <div className="ticketCard Card">
                    <div className="ticketHeading">
                        <div className="title">
                            <h3 className="ticketTitle">Tasks</h3>
                            <p>Today</p>
                        </div>
                        <div className="details">
                            <p>View all</p>
                        </div>
                    </div>
                    <div className="infoItems secondInfoItems">
                        <div className="infoItem">
                            <h4>Create new task</h4>
                            <img src={Images.Plus} alt="" />
                        </div>
                        <div className="infoItem">
                            <div className="check">
                                <input type="checkbox" name="finished" id="finished" className='checkBox' />
                                <label htmlFor="finished">Finish ticket update</label>
                            </div>
                            <button className='btn urgentBtn'>Urgent</button>
                        </div>
                        <div className="infoItem">
                            <div className="check">
                                <input type="checkbox" name="create" id="create" className='checkBox' />
                                <label htmlFor="create">Create new ticket example</label>
                            </div>
                            <button className='btn NewBtn'>New</button>
                        </div>
                        <div className="infoItem">
                            <div className="check">
                                <input type="checkbox" name="update" id="update" className='checkBox' defaultChecked />
                                <label htmlFor="update">Update ticket report</label>
                            </div>
                            <button className='btn DefaultBtn'>Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chart
