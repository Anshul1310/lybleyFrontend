import React from 'react'
import { useState, useEffect } from "react";
import NewsTableRow from "./NewsTableRow";
import categories from "../../CategoriesData"
import baseUrl from "../../http/Constant";
import api from "../../http";

const NewsCategoryTable = ({ modalOpen }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/api/newscategories/all").then((data) => {
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
                    <th scope="col">NAME</th>
                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((data, key) => {
                        return <NewsTableRow key={key} id={data._id} image={baseUrl + "" + data.image} name={data.name} modalOpen={modalOpen} />
                    })

                }
            </tbody>
        </table>
    )
}

export default NewsCategoryTable