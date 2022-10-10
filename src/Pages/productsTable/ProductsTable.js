import React from 'react'
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import ProductsData from '../../ProductsData';
import api from "../../http";
import baseUrl from "../../http/Constant";


const ProductsTable = ({ modalOpen, lastCat }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(lastCat + "");
        api.get(`/api/product/${lastCat}`).then((data) => {
            console.log(data.data);
            setProducts(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [lastCat])

    return (
        <table className='table table-primary table-striped' style={{ marginBottom: '0' }}>
            <thead>
                <tr>
                    <th scope="col">PHOTO</th>
                    <th scope="col">NAME</th>
                    <th scope="col">Measuring Unit</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">SELLER</th>
                    <th scope="col">STOCK</th>
                    <th scope="col">STORE</th>
                    <th scope="col">CREATED AT</th>
                    <th scope="col">EDIT</th>
                    <th scope="col">REMOVE</th>
                </tr>
            </thead>
            <tbody>
                {products.map((data, id) => {
                    return <TableRow key={id} stock={data.stock} title={data.title} store={data.store} seller={data.seller} createdAt={data.createdAt} image={baseUrl + "" + data.image} price={data.price} measuringUnit={data.measuringUnit} modalOpen={modalOpen} />
                })}
            </tbody>
        </table>
    )
}

export default ProductsTable