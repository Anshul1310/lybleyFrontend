import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import api from "../../http";

const Banner = () => {
    const [banner1, setBanner1] = useState("")
    const [banner2, setBanner2] = useState("")
    const [banner3, setBanner3] = useState("")
    const [banner4, setBanner4] = useState("")
    const [banner5, setBanner5] = useState("")
    const [banner6, setBanner6] = useState("")

    useEffect(() => {
        api.get("/api/settings/banner").then((data) => {
            console.log(data.data);
            if (data.data.banner != null) {
                setBanner1(data.data.banner.banner1);
                setBanner2(data.data.banner.banner2);
                setBanner3(data.data.banner.banner3);
                setBanner4(data.data.banner.banner4);
                setBanner5(data.data.banner.banner5);
                setBanner6(data.data.banner.banner6);
            }


        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [])

    const handleClick = (e) => {
        api.post("/api/settings/banner", { banner: { banner1, banner2, banner3, banner4, banner5, banner6 } }).then((data) => {
            alert("Saved successfully")
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }

    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className="main">
            {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
            <div className="flex-container" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                <Navbar toggleSideBar={toggleSideBar} />
                <div className="container">
                    <div className="d-flex flex-column align-items-center my-4" style={{ backgroundColor: '#eee', padding: '0.5rem 0', borderRadius: "10px" }}>
                        <div className="my-2">
                            <h2>Banners</h2>
                        </div>
                        <div className="container">
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner1</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner1" value={banner1} onChange={(e) => setBanner1(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner2</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner2" value={banner2} onChange={(e) => setBanner2(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner3</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner3" value={banner3} onChange={(e) => setBanner3(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner4</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner4" value={banner4} onChange={(e) => setBanner4(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner5</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner5" value={banner5} onChange={(e) => setBanner5(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon2">Banner6</span>
                                    <input type="text" placeholder='banner' className="form-control" id="banner6" value={banner6} onChange={(e) => setBanner6(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success" onClick={(e) => handleClick(e)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner