import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Item = ({ id, title, date }) => {

    const dates = new Date();
    const year = dates.getFullYear();
    const month = dates.getMonth();
    const day = dates.getDate();
    const now = `${year}-${month}-${day}`;


    return (
        <div className="itemContainer">
            <h2 className="id">1</h2>
            <h2 className="title">First Post</h2>
            <h2 className="date">{now}</h2>
            <h2 className="action edit">
                <MdModeEdit className="icon"/>
                <MdDelete className="icon"/>
            </h2>
        </div>
    )
}

export default Item;