import React from 'react'
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import baseUrl from "../../http/Constant";
import data from '../../CategoriesData'
import api from "../../http";

const CategoriesTable = ({ deleteModalOpen, modalOpen }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/api/categories/all").then((data) => {
            setCategories(data.data);
        }).catch((err) => {
            alert("Network Conncetion Error");
            console.log(err);
        });
    }, [])

    return (
        <table className='table table-primary table-striped' style={{ marginBottom: '0' }}>
            <thead>
                <tr>

                    <th scope="col">PHOTO</th>
                    <th scope="col">CATEGORIES</th>
                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((data1, key) => {
                        return <TableRow key={key} id={data1._id} modalOpen={modalOpen} deleteModalOpen={deleteModalOpen} image={baseUrl + "" + data1.image} name={data1.name} />
                    })

                }
            </tbody>
        </table>
    )
}

export default CategoriesTable