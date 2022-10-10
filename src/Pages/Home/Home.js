import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import LineChart from '../../Components/chart/LineChart';
import PieChart from '../../Components/chart/PieChart';
import DetailsBox from "../../Components/detailsBox/DetailBox";
import Navbar from "../../Components/navbar/Navbar";
import api from "../../http/"
import OrderTableRow from "./OrderTableRow";
import baseUrl from "../../http/Constant";
import ProductTableRow from "./ProductTableRow";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
    const [transaction, setTransaction] = useState({ initiated: 1, success: 1 });
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isChanged, setIsChanged] = useState(false)
    const [isChanged2, setIsChanged2] = useState(false)

    const [barChart, setBarChart] = useState({ sellers: [], buyers: [], products: [] });
    useEffect(() => {
        api.get("/api/transaction/info").then((data) => {
            setTransaction(data.data)
            setIsChanged(true);

            api.get("/api/order/recent").then((data) => {
                setOrders(data.data)

                api.get("/api/product/recent").then((data) => {

                    setProducts(data.data)

                    api.get("/api/settings/info", { query: 7 }).then((data) => {
                        setIsChanged2(true);

                        setBarChart(data.data);

                    }).catch((err) => {
                        alert("Network Conncetion Error");
                        console.log(err);
                    });

                }).catch((err) => {
                    alert("Network Conncetion Error");
                    console.log(err);
                });


            }).catch((err) => {
                alert("Network Conncetion Error");
                console.log(err);
            });


        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [])

    const [showSidebar, setShowSidebar] = useState(true)
    const toggleSideBar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <div className="main">
            {showSidebar ? <div className="Sidebar"><Sidebar /></div> : <div className="SidebarSmall"><Sidebar /></div>}
            <div className="flex-container" style={showSidebar ? { marginLeft: '258px' } : { marginLeft: '95px' }}>
                <Navbar toggleSideBar={toggleSideBar} />
                <div className="top_info">
                    <DetailsBox className="detail_box" />
                </div>
                <div className="charts">
                    <PieChart transaction={transaction} />
                    <LineChart barCharts={barChart} />
                </div>

                <div className="section">
                    <div className="container-lg">
                        <h2>Recent Products</h2>
                        <p>Products added today. Click <Link to='/products'>here</Link> for more details </p>
                        <table className='table table-primary table-striped' style={{ marginBottom: '0' }}>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">UNIT</th>
                                    <th scope="col">CATEGORY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((data, id) => {
                                        return <ProductTableRow key={id} image={baseUrl + "" + data.image} seller={data.seller}
                                            price={data.price} category={data.category} measuringUnit={data.measuringUnit} />
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="container-lg">
                        <h2>Recent Orders</h2>
                        <p>Orders ordered today. Click <Link to='/orders'>here</Link> for more details </p>
                        <table className='table table-primary table-striped' style={{ marginBottom: '0' }}>
                            <thead>
                                <tr>

                                    <th scope="col">ORDER ID</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">BUYER</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((data, id) => {
                                        return <OrderTableRow key={id} buyer={data.buyer} date={data.date}
                                            totalPrice={data.totalPrice} orderId={data.orderId} status={data.status} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home