import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPosting } from '../store/actions';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MdGetApp } from 'react-icons/md';

const New = () => {
  // create redux
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const onCreate = (title, des) => dispatch(addPosting(title, des));

  // input
  const [inputs, setInputs] = useState({
    title: '',
    des: '',
  });

  const { title, des } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    onCreate(title, des);
    setInputs({
      title: '',
      des: '',
    });
  };

  return (
    <div className="newContainer">
      <form onSubmit={onSubmit}>
        <div className="btn">
          <Link to="/">
            <IoMdArrowRoundBack className="back" />
          </Link>
          <button onSubmit={onSubmit}>
            <MdGetApp className="save" />
          </button>
        </div>
        <div className="titleContainer">
          <input
            type="text"
            name="title"
            autoComplete="off"
            required
            value={title}
            onChange={onChange}
          />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Title</span>
          </label>
        </div>
        <div className="desContainer">
          <textarea
            name="des"
            cols="30"
            rows="10"
            required
            value={des}
            onChange={onChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default New;
