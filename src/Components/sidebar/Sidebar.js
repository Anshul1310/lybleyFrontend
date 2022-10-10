import React from "react";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link, useNavigate } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = () => {
    // const navigate = useNavigate();
    // const logoutUser = (e) => {
    //     localStorage.removeItem("token")
    //     navigate("/login");
    // }
    return (
        <>
            <div className="top">
                <span className="heading">Admin Panel</span>
            </div>

            <div className="center">
                <ul>
                    <li className="item" data-bs-toggle="tooltip" title="Dashboard">
                        <a href='/'>
                            <DashboardIcon className="icon" />
                            <span className="spanList">Dashboard</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Users">
                        <a href='/users'>
                            <PersonOutlineIcon className="icon" />
                            <span className="spanList">Users</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Products">
                        <a href='/products'>
                            <StoreMallDirectoryIcon className="icon" />
                            <span className="spanList">Products</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="banner imgs">
                        <a href='/banner'>
                            <StoreMallDirectoryIcon className="icon" />
                            <span className="spanList">Banner Images</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Categories">
                        <a href='/categories'>
                            <CategoryOutlinedIcon className="icon" />
                            <span className="spanList">Categories</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Sellers">
                        <a href='/sellers'>
                            <LocalShippingOutlinedIcon className="icon" />
                            <span className="spanList">Sellers</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Stores">
                        <a href='/stores'>
                            <StoreMallDirectoryIcon className="icon" />
                            <span className="spanList">Stores</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="news category">
                        <a href='/newsCategory'>
                            <CategoryOutlinedIcon className="icon" />
                            <span className="spanList">News Category</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Earnings">
                        <a href='/earnings'>
                            <AttachMoneyIcon className="icon" />
                            <span className="spanList">Earnings</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Orders">
                        <a href='/orders'>
                            <ShoppingBasketIcon className="icon" />
                            <span className="spanList">Orders</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Static product">
                        <a href='/staticProducts'>
                            <StoreMallDirectoryIcon className="icon" />
                            <span className="spanList">Static Products</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Notification">
                        <a href='/notification'>
                            <NotificationsNoneIcon className="icon" />
                            <span className="spanList">Notifications</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="News">
                        <a href='/news'>
                            <FeedIcon className="icon" />
                            <span className="spanList">News</span>
                        </a>
                    </li>
                    <li className="item" data-bs-toggle="tooltip" title="Admins">
                        <a href='/admins'>
                            <SettingsIcon className="icon" />
                            <span className="spanList">Admins</span>
                        </a>
                    </li>

                    <li className="item" data-bs-toggle="tooltip" title="LogOut">
                        <a href="#">
                            {/* onClick={(e) => logoutUser(e)} This is inside above*/}
                            <LogoutIcon className="icon" />
                            <span className="spanList">Logout</span>

                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;