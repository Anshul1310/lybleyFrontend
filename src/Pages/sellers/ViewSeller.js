import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import api from "../../http";
import "./seller.css";

const ViewSeller = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }

    const location = useLocation();
    const { from } = location.state;

    const navigate = useNavigate();
    const [name, setName] = useState(from.name);
    const [gender, setGender] = useState(from.gender);
    const [age, setAge] = useState(from.age);
    const [status, setStatus] = useState(from.status);
    const [region, setRegion] = useState(from.region);
    const [zone, setZone] = useState(from.zone);
    const [woreda, setWoreda] = useState(from.woreda);
    const [kebele, setKebele] = useState(from.kebele);
    const [phone, setPhone] = useState(from.phone);
    const [additional_number, setAdditionalNumber] = useState(from.additional_number);
    const [email, setEmail] = useState(from.email);
    const [id] = useState(from.id);
    const [type, setType] = useState(from.type);
    const [level, setLevel] = useState(from.level);
    const [bookNumber, setBookNumber] = useState(from.bookNumber);
    const [tin, setTin] = useState(from.tin);


    const handleClick = (e) => {
        api.post("/api/sellers/update", {
            name, id, email, gender, status, bookNumber, zone, woreda, kebele, tin, additional_number, phone, type, level, age
        }).then((data) => {
            console.log(data);
            navigate("/sellers");

        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }
    return (
        <>
            <div className="main">
                {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
                <div className="flex-container" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                    <Navbar toggleSideBar={toggleSideBar} />
                    <div className="AddSellerPage">
                        <div className="flex-container d-flex flex-row align-items-center align-self-center">
                            <a href='/sellers'><ArrowBackIcon style={{ fontSize: '29px' }} className="arrowBack" /></a>
                            <h2 style={{ marginLeft: "17px" }}>Edit Seller</h2>
                        </div>
                        <div className="container border border-primary p-4 mb-2 border-opacity-50" style={{ borderRadius: '10px' }}>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Name</span>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-John Doe" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Gender</span>
                                    <input type="text" className="form-control" onChange={(e) => setGender(e.target.value)} value={gender} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-male" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Age</span>
                                    <input type="text" className="form-control" onChange={(e) => setAge(e.target.value)} value={age} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-28" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e) => setRegion(e.target.value)} value={region}>
                                        <option defaultValue>Select Region</option>
                                        <option value="1">Tigray</option>
                                        <option value="2">Afar</option>
                                        <option value="3">Amhara</option>
                                        <option value="4">Oromia</option>
                                        <option value="4">Somali</option>
                                        <option value="4">Benishangul-Gumuz</option>
                                        <option value="4">SNNPR</option>
                                        <option value="4">Gambella</option>
                                        <option value="4">Harari</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Zone</span>
                                    <input type="text" className="form-control" onChange={(e) => setZone(e.target.value)} value={zone} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-North Gondar" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Woreda</span>
                                    <input type="text" className="form-control" onChange={(e) => setWoreda(e.target.value)} value={woreda} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-woreda" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Kebele</span>
                                    <input type="text" className="form-control" onChange={(e) => setKebele(e.target.value)} value={kebele} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-kebele" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Phone Number</span>
                                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-+251 398198287" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Email</span>
                                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-johndoe@gmail.com" />
                                </div>
                                {/* <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Select Type</label>
                                    <select id="inputGroupSelect01" onChange={(e) => { setType(e.target.value) }} className="form-select" >
                                        <option defaultValue>Select Category</option>
                                        <option value="1">Multi Farmer</option>
                                        <option value="2">Producer</option>
                                        <option value="3">Importer</option>
                                        <option value="4">Distributor</option>
                                    </select>
                                </div> */}
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Select Level</label>
                                    <select id="inputGroupSelect01" onChange={(e) => setLevel(e.target.value)} value={level} className="form-select">
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Book Number</span>
                                    <input type="text" className="form-control" onChange={(e) => setBookNumber(e.target.value)} value={bookNumber} id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">TIN</span>
                                    <input type="text" className="form-control" onChange={(e) => setTin(e.target.value)} value={tin} id="basic-url" aria-describedby="basic-addon3" />
                                </div>


                                <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewSeller