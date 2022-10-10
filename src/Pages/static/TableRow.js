import api from "../../http";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

const TableRow = (props) => {
    const [date, setDate] = useState(dayjs(props.createdAt).format('DD/MM/YYYY'));
    const navigate = useNavigate();
    const handleClick = (e) => {
        api.post("/api/product-price/delete", {
            id: props.id
        }).then((data) => {
            window.location.reload();
        }).catch((err) => {
            // alert("Network Conncetion Error");
            console.log(err);
        });
    }

    const handleEdit = () => {
        localStorage.setItem("lastProduct", props.id);
        props.modalOpen();
    }

    return (
        <tr>

            <td>
                <img src={props.image} alt="cookie" />
            </td>
            <td>{props.title}</td>
            <td>{props.measuringUnit}</td>
            <td>{props.date}</td>
            <td>{props.location}</td>
            <td>{props.price}</td>
            <td>
                <div style={{ color: '#05b171', cursor: 'pointer' }} onClick={(e) => handleEdit(e)}><EditIcon /></div>
            </td>
            <td>
                <div className="deleteIcon"><DeleteIcon onClick={(e) => handleClick(e)} /></div>
            </td>
        </tr>
    )
}

export default TableRow;