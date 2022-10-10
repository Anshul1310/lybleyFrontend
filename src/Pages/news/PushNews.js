import React from 'react'
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import { Link, useNavigate } from 'react-router-dom'
import api from "../../http";
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PushNews = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }

    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState("buyer");
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState();


    const handleChange = (e) => {
        const file = e.target.files[0];
        //to convert file to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        api.post("/api/news/add", {
            title, image, description, category
        }).then((data) => {
            navigate("/news")
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }

    useEffect(() => {
        api.get("/api/newscategories/all").then((data) => {

            setCategories(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [])

    return (
        <div className="main">
            {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
            <div className="flex-container" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                <Navbar toggleSideBar={toggleSideBar} />
                <div className="pushNewsPage">
                    <div className="flex-container d-flex flex-row align-items-center align-self-center">
                        <a href='/news'><ArrowBackIcon style={{ fontSize: '29px' }} className="arrowBack" /></a>
                        <h2 style={{ marginLeft: "17px" }}>Push News</h2>
                    </div>
                    <div className="container border border-primary p-4 mb-2 border-opacity-50" style={{ borderRadius: '10px' }}>
                        <form>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon3">Title</span>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="Ex-Most purchased items" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div className="col-md-6 input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01" onChange={(e) => setCategory(e.target.value)}>Category</label>
                                <select className="form-select" id="inputGroupSelect01" onChange={(e) => setCategory(e.target.value)} >
                                    {categories.map((data) => {
                                        return <option value={data.name}>{data.name}</option>
                                    })}
                                    return <option value="buyer">Buyer</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text">Description</span>
                                <textarea class="form-control" aria-label="With textarea" onChange={(e) => setDescription(e.target.value)} placeholder="Ex-John doe products are the most purchased items"></textarea>
                            </div>
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => handleChange(e)} />
                                <label className="input-group-text" htmlFor="inputGroupFile02" >Upload Image</label>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PushNews