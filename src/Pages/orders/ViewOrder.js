import "./orders.css";
import React, { useState } from 'react'
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import TableRow from "./TableRow";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import api from "../../http";
import baseUrl from "../../http/Constant";
import EditIcon from '@mui/icons-material/Edit';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import items from '../../ProductsData'

const ViewOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state;
    const [status, setStatus] = useState(from.status)
    const [date, setDate] = useState(from.date);
    const [note, setNote] = useState(from.note)
    const [buyer, setBuyer] = useState(from.buyer);
    const [items, setItems] = useState(from.items);
    const [orderId, setOrderId] = useState(from.orderId)

    const cancelOrder = (e) => {
        api.post("/api/order/cancelOrder", {
            ...from
        }).then((data) => {
            navigate("/orders");
            console.log(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }
    // const editOrder = () => {
    //     const input = document.querySelectorAll('input');
    //     document.getElementById('cls').style.display = "flex"
    //     for (let i = 0; i < input.length; i++) {
    //         input[i]. = false
    //     }
    // }
    // const closeEdit = () => {
    //     const input = document.querySelectorAll('input');
    //     document.getElementById('cls').style.display = "none"
    //     for (let i = 0; i < input.length; i++) {
    //         input[i]. = true
    //     }
    // }

    const handleChange = (e) => {
        api.post("/api/order/update", {
            status, date, note, buyer, items, orderId
        }).then((data) => {
            console.log(data.data)
        }).catch((err) => {
            // alert("Network Conncetion Error");
            // console.log(err);
        });
    }
    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className="main">
            {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
            <div className="container1" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                <Navbar toggleSideBar={toggleSideBar} />
                <div className="OrdersPage">
                    <div className="viewOrderHead">
                        <Link to='/orders'><ArrowBackIcon className="arrowBack" /></Link>
                        <h2>Order Details</h2>
                    </div>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-text">Buyer</div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" value={buyer} onChange={(e) => setBuyer(e.target.value)} placeholder="Cortie Gemson" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-text">Order ID</div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" value={orderId} placeholder="John Doe" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-text">Notes</div>
                                <input type="text" className="form-control" onChange={(e) => setNote(e.target.value)} value={note} id="autoSizingInputGroup" placeholder="Imported Perfumes" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-text">Date</div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="03/09/2022" disabled value={date} />
                            </div>
                        </div>
                        <div className="col-md-6 input-group">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Status</label>
                            <select className="form-select" id="inputGroupSelect01" onChange={(e) => setStatus(e.target.value)} value={status}>
                                <option defaultValue>Select</option>
                                <option value="1">Dispatched</option>
                                <option value="2">Preparing</option>
                                <option value="3">On The Way</option>
                                <option value="4">Delievered</option>
                            </select>
                        </div>
                        <div className="d-flex" style={{ columnGap: '10px' }}>
                            <button type="submit" className="btn btn-success" onClick={(e) => handleChange(e.target.value)}><EditIcon /> Edit Order</button>
                            <button type="submit" className="btn btn-danger" onClick={(e) => cancelOrder(e.target.value)}>Cancel Order</button>
                            <Link className="btn btn-danger" to="/orders" role="button"><CloseIcon />Close</Link>
                        </div>
                    </form>
                </div>


                <div className="OrdersPageTable">
                    <table className='table table-primary table-striped' style={{ marginBottom: '0' }}>
                        <thead>
                            <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">MEASURING UNIT</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">SELLER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((data, key) => {
                                    return <TableRow key={key} title={data.title} image={baseUrl + "" + data.image} measuringUnit={data.measuringUnit} price={data.price} stock={data.stock} seller={data.seller} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder;
