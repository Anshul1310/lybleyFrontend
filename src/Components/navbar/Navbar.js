import React, { useState, useEffect, useRef } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import api from "../../http";

const Navbar = ({ toggleSideBar }) => {
    const [rate, setRate] = useState(0);

    useEffect(() => {
        api.get("/api/settings/rate").then((data) => {
            setRate(data.data);
        }).catch((err) => {
            alert("Network Error")
        });
    }, [])

    const close = useRef(null)

    const handleChange = (e) => {
        api.post("/api/settings/rate", {
            rate
        }).then((data) => {
            console.log(data.data)
            close.current.click();
            alert("Upload Successfull");
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#00ffcb38' }}>
                <div className="container-fluid">
                    <a className="icon mx-2"><MenuIcon onClick={() => toggleSideBar()} /></a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" className="btn btn-outline-primary">Search</button>
                    </form>
                    <div className='mx-2'>
                        <a className="icon mx-2"><SettingsIcon data-bs-toggle="modal" data-bs-target="#editModal1" /></a>
                        <a className="icon mx-2" href='/notification'><NotificationsNoneIcon /></a>
                    </div>
                </div>
            </nav>

            <div className="modal" id="editModal1" tabIndex="-1" aria-labelledby="editModal1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Enter Commission Percent</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">Commission Percent</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" onChange={(e) => setRate(e.target.value)} placeholder={rate} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={close}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e) => handleChange(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar