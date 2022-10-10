import "./Products.css";
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import { useLocation } from 'react-router-dom'
import React from 'react'
import baseUrl from "../../http/Constant";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom'
import api from "../../http";
import { useEffect, useState } from "react";

const AddProduct = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [id, setId] = useState(null);
    const [sellers, setSellers] = useState([]);
    const [stores, setStores] = useState([]);
    const [store, setStore] = useState(null);
    const [stock, setStock] = useState(1);
    const [seller, setSeller] = useState(null);
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isChanged, setIsChanged] = useState(false);
    const [measuringUnit, setMeasuringUnit] = useState("");
    const [price, setPrice] = useState("");
    const [slashedPrice, setSlashePrice] = useState("");
    const [moq, setMoq] = useState("");
    const [image, setImage] = useState("#");

    useEffect(() => {
        if (location.state != null) {
            let from = location.state.from;
            if (from != null) {
                setTitle(from.title);
                setDescription(from.description);
                setCategory(from.category);
                setMoq(from.moq);
                setPrice(from.price);
                setCategory(from.category)
                setSeller(from.seller)
                setStock(from.stock)
                setStore(from.store)
                setId(from._id);
                setSlashePrice(from.slashedPrice);
                setMeasuringUnit(from.measuringUnit);
                setMoq(from.moq)
                setImage(from.image);

            }
        }
        api.get("/api/categories/all").then((data) => {
            setCategories(data.data);
            setCategory(data.data[0].category);
            api.get("/api/sellers/all").then((data) => {
                setSellers(data.data);
                setSeller(data.data[0]._id)
                api.get("/api/stores/all").then((data) => {
                    setStores(data.data);
                    setStore(data.data[0].name)
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                alert("1Network Conncetion Error");
                console.log(err);
            });
        }).catch((err) => {
            alert("1Network Conncetion Error");
            console.log(err);
        });


    }, []);
    const uploadProduct = (e) => {
        if (id != null) {

            api.post("/api/product/update", {
                title, id, description, category, isChanged, stock, seller, store, measuringUnit, price, slashedPrice, moq, image: image.replace(baseUrl, "")
            }).then((data) => {

                navigate("/products");
            }).catch((err) => {
                alert("Network Conncetion Error");
                console.log(err);
            });
        } else {
            api.post("/api/product/add", {
                title, id, description, category, stock, isChanged, seller, store, measuringUnit, price, slashedPrice, moq, image: image.replace(baseUrl, "")
            }).then((data) => {

                navigate("/products");
            }).catch((err) => {
                alert("Network Conncetion Error");
                console.log(err);
            });
        }
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        setIsChanged(true);
        //to convert file to base64 string
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
        }
    }
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
                            <h2 style={{ marginLeft: "17px" }}>Add Product</h2>
                        </div>
                        <div className="container border border-primary p-4 mb-2 border-opacity-50" style={{ borderRadius: '10px' }}>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Product Name</span>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex=Iphone13" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Product Description</span>
                                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                                    <select id="inputGroupSelect01" value={category} name="category" onChange={(e) => setCategory(e.target.value)} className="form-select">
                                        {
                                            categories.map((data, id) => {
                                                return <option value={data.name}>{data.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Sellers</label>
                                    <select id="inputGroupSelect01" onChange={(e) => setSeller(e.target.value)} className="form-select">
                                        {
                                            sellers.map((data, id) => {
                                                return <option value={data._id}>{data._id}</option>

                                            })
                                        }
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Store</label>
                                    <select id="inputGroupSelect01" value={store} onChange={(e) => setStore(e.target.value)} className="form-select">
                                        {
                                            stores.map((data, id) => {
                                                return <option value={data.name}>{data.name}</option>

                                            })
                                        }
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Unit Of Measurement</span>
                                    <input type="text" className="form-control" value={measuringUnit} onChange={(e) => { setMeasuringUnit(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-kg" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Available Stock</span>
                                    <input type="text" className="form-control" value={stock} onChange={(e) => { setStock(e.target.value) }} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-1000" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Slashed Price</span>
                                    <input type="text" className="form-control" value={slashedPrice} onChange={(e) => setSlashePrice(e.target.value)} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-kg" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">Minimum Order quantity</span>
                                    <input type="text" className="form-control" value={moq} onChange={(e) => setMoq(e.target.value)} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-100" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon3">price</span>
                                    <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} id="basic-url" aria-describedby="basic-addon3" placeholder="Ex-100" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => handleChange(e)} />
                                    {/* <img width="100%" height="100%" src={image} /> */}
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => uploadProduct(e)}>Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct