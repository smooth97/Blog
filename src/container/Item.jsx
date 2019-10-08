import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Item = React.memo(function Item({ post, date, onToggle}) {

    return (
        <div className="itemContainer">
            <h2 className="id">{post.id}</h2>
            <h2 className="title">{post.title}</h2>
            <h2 className="date">{date}</h2>
            <h2 className="action edit">
                <MdModeEdit className="icon"/>
                <MdDelete className="icon" onClick={() => onToggle(post.id)}/>
            </h2>
        </div>
    )
})

export default Item;