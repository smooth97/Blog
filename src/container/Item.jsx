import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import Confirm from './Confirm';
import Modal from './Modal';

const Item = React.memo(function Item({ post, date, onToggle }) {
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);

  // Modal
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // Confirm
  const remove = () => {
    onToggle(post.id);
  };

  const onClick = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="itemContainer">
      <div className="modalOpen" onClick={openModal}></div>
      <h2 className="id">{post.id}</h2>
      <h2 className="title">{post.title}</h2>
      <h2 className="date">{date}</h2>
      <h2 className="action edit">
        <MdModeEdit className="icon" onClick={openModal} />
        <MdDelete className="icon" onClick={onClick} />
      </h2>
      <Confirm post={post} open={open} remove={remove} close={close} />
      <Modal post={post} modal={modal} close={closeModal} />
    </div>
  );
});

export default Item;
