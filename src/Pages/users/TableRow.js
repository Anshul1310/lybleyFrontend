import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
const TableRow = (props) => {

    const { organization, name, _id, phone, level, type } = props;

    return (
        <tr>

            <td>{_id}</td>
            <td>{organization}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{type}</td>
            <td>{level}</td>
            <td>
                <button type="button" class="btn btn-success">Active</button>
            </td>
            <td>
                <a className="btn btn-primary" href="/viewUser" role="button" state={{ from: props }}>View</a>
            </td>
        </tr>
    );
}

export default TableRow;