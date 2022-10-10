import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import api from "../../http";
import './Users.css';


const ViewUser = () => {
    const location = useLocation()
    const { from } = location.state;
    const [email, setEmail] = useState(from.email);
    const [name, setName] = useState(from.name);
    const [tin, setTin] = useState(from.tin);
    const navigate = useNavigate();
    const [id, setId] = useState(from._id);
    const [status, setStatus] = useState(from.status);

    const [additional_number, setAdditionalNumber] = useState(from.additional_number);
    const [organization, setOrganisation] = useState(from.organization);
    const [address, setAddress] = useState(from.address);
    const [phone, setPhone] = useState(from.phone);
    const [type, setType] = useState(from.type);
    const [contact_person, setContactPerson] = useState(from.contact_person);
    const [level, setLevel] = useState(from.level);



    const editUser = () => {
        api.post("/api/buyers/update", {
            name, email, id, status, tin, additional_number, organization
            , address, phone, type, contact_person, level
        }).then((data) => {
            navigate("/users");
            console.log(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }

    // const closeEdit = () => {
    //     const input = document.querySelectorAll('input');
    //     const select = document.querySelectorAll('select');
    //     document.getElementById('cls').style.display = "none"
    //     document.querySelectorAll('textarea')[0].disabled = true;
    //     for (let i = 0; i < input.length; i++) {
    //         input[i].disabled = true
    //     }
    //     for (let i = 0; i < select.length; i++) {
    //         select[i].disabled = true
    //     }
    // }

    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <>
            <div className="main">
                {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
                <div className="flex-container" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                    <Navbar toggleSideBar={toggleSideBar} />
                    <div className="Addproductpage">
                        <div className="flex-container d-flex flex-row align-items-center align-self-center">
                            <a href='/products'><ArrowBackIcon style={{ fontSize: '29px' }} className="arrowBack" /></a>
                            <h2 style={{ marginLeft: "17px" }}>Edit Product</h2>
                        </div>
                        <div className="container border border-primary p-4 mb-2 border-opacity-50" style={{ borderRadius: '10px' }}>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Organization</span>
                                    <input type="text" className="form-control" onChange={(e) => setOrganisation(e.target.value)} value={organization} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-orgXYZ" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Contact Person</span>
                                    <input type="text" className="form-control" onChange={(e) => setContactPerson(e.target.value)} value={contact_person} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-Susan Bond" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Address</span>
                                    <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} value={address} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-Bole Subcity Kebele 14 H.No179/B Addis Ababa 7512" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Phone Number</span>
                                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Additional Phone Number</span>
                                    <input type="text" className="form-control" onChange={(e) => setAdditionalNumber(e.target.value)} value={additional_number} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex - +251 398198287 " />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Email</span>
                                    <input type="text" className="form-control" id="basic-url" onChange={(e) => setEmail(e.target.value)} value={email}
                                        placeholder='Ex-johndoes@example.com ' aria-describedby="basic-addon3" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Buyer Type</label>
                                    <select id="inputGroupSelect01" onChange={(e) => setType(e.target.value)} value={type} className="form-select">
                                        <option value="select">Select Category</option>
                                        <option value="Multi Farmer">Retailer</option>
                                        <option value="Producer">Supermarket</option>
                                        <option value="Importer">Unions</option>
                                        <option value="Distributor">Other groups</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Buyer Level</label>
                                    <select id="inputGroupSelect01" value={level} onChange={(e) => setLevel(e.target.value)} className="form-select">
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Status</label>
                                    <select id="inputGroupSelect01" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
                                        <option value="Pending">Pending</option>
                                        <option value="verified">Verified</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">TIN</span>
                                    <input type="text" className="form-control" onChange={(e) => setTin(e.target.value)} value={tin} id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={() => editUser()}>Edit Details</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUser