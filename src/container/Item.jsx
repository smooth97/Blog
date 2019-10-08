import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Confirm from './Confirm';

const Item = React.memo(function Item({ post, date, onToggle}) {

    const [open, setOpen] = useState(false);

    const remove = () => {
        onToggle(post.id)
    }

    const onClick = () => {
        setOpen(true);
    }

    const close = () => {
        setOpen(false);
    }

    return (
        <div className="itemContainer">
            <h2 className="id">{post.id}</h2>
            <h2 className="title">{post.title}</h2>
            <h2 className="date">{date}</h2>
            <h2 className="action edit">
                <MdModeEdit className="icon"/>
                <MdDelete className="icon" onClick={onClick}/>
            </h2>
            <Confirm post={post} open={open} remove={remove} close={close}/>
        </div>
    )
})

export default Item;