import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../../http";
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AddSeller = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [region, setRegion] = useState();
    const [zone, setZone] = useState();
    const [woreda, setWoreda] = useState();
    const [kebele, setKebele] = useState();
    const [phone, setPhone] = useState();
    const [additional_number, setAdditionalNumber] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState("Importer");
    const [level, setLevel] = useState("Level 1");
    const [bookNumber, setBookNumber] = useState();
    const [tin, setTin] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        api.post("/api/sellers/add", {
            name, email, gender, bookNumber, zone, woreda, kebele, region, tin, additional_number, phone, type, level, age
        }).then((data) => {
            navigate("/sellers");
            console.log(data.data);
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
                            <h2 style={{ marginLeft: "17px" }}>Add Seller</h2>
                        </div>
                        <div className="container border border-primary p-4 mb-2 border-opacity-50" style={{ borderRadius: '10px' }}>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Name</span>
                                    <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-John Doe" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Gender</span>
                                    <input type="text" className="form-control" onChange={(e) => { setGender(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-male" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Age</span>
                                    <input type="text" className="form-control" onChange={(e) => { setAge(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-28" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                    <select className="form-select" id="inputGroupSelect01" onChange={(e) => { setRegion(e.target.value) }}>
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
                                    <input type="text" className="form-control" onChange={(e) => { setZone(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-North Gondar" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Woreda</span>
                                    <input type="text" className="form-control" onChange={(e) => { setWoreda(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-woreda" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Kebele</span>
                                    <input type="text" className="form-control" onChange={(e) => { setKebele(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-kebele" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Phone Number</span>
                                    <input type="text" className="form-control" onChange={(e) => { setPhone(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-+251 398198287" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Email</span>
                                    <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Example-johndoe@gmail.com" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Select Type</label>
                                    <select id="inputGroupSelect01" onChange={(e) => { setType(e.target.value) }} className="form-select" >
                                        <option defaultValue>Select Category</option>
                                        <option value="1">Multi Farmer</option>
                                        <option value="2">Producer</option>
                                        <option value="3">Importer</option>
                                        <option value="4">Distributor</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Select Level</label>
                                    <select id="inputGroupSelect01" onChange={(e) => { setLevel(e.target.value) }} className="form-select">
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Book Number</span>
                                    <input type="text" className="form-control" onChange={(e) => { setBookNumber(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">TIN</span>
                                    <input type="text" className="form-control" onChange={(e) => { setTin(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" />
                                </div>


                                <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Add seller</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSeller