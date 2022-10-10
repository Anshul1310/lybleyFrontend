import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddAdmin from './Pages/admins/AddAdmin';
import Admins from './Pages/admins/Admins';
import EditAdmin from './Pages/admins/EditAdmin';
import Banner from './Pages/Banners/Banner';
import Categories from './Pages/categories/Categories';
import Earnings from './Pages/earnings/Earnings';
import Home from './Pages/Home/Home'
import EditNews from './Pages/news/EditNews';
import News from './Pages/news/News';
import PushNews from './Pages/news/PushNews';
import NewsCategory from './Pages/newsCategory/NewsCategory';
import Notification from './Pages/notification/Notification';
import Orders from './Pages/orders/Orders';
import ViewOrder from './Pages/orders/ViewOrder'
import AddProduct from './Pages/products/AddProduct';
import Products from './Pages/products/Products';
import AddSeller from './Pages/sellers/AddSeller';
import Sellers from './Pages/sellers/Sellers';
import ViewSeller from './Pages/sellers/ViewSeller';
import AddStaticProduct from './Pages/static/AddStaticProduct';
import StaticProducts from './Pages/static/StaticProducts';
import AddStore from './Pages/stores/AddStore';
import Stores from './Pages/stores/Stores';
import Adduser from './Pages/users/Adduser';
import Users from './Pages/users/Users';
import ViewUser from './Pages/users/ViewUser';

function App() {
  return (
    <div className="mainApp">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/viewUser" element={<ViewUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/addSeller" element={<AddSeller />} />
          <Route path="/viewSeller" element={<ViewSeller />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/addStores" element={<AddStore />} />
          <Route path="/newsCategory" element={<NewsCategory />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/viewOrder" element={<ViewOrder />} />
          <Route path="/staticProducts" element={<StaticProducts />} />
          <Route path="/addStaticProducts" element={<AddStaticProduct />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/push" element={<PushNews />} />
          <Route path="/news/edit" element={<EditNews />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/viewAdmin" element={<EditAdmin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
