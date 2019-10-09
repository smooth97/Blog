import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePosting } from '../store/actions';

const Modal = ({ post, modal, close }) => {
  // update redux
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const onUpdate = (title, description) =>
    dispatch(updatePosting(title, description));

  // inputs
  const [inputs, setInputs] = useState({
    title: post.title,
    description: post.description,
  });

  const { title, description } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    onUpdate(title, description);
    setInputs({
      title: post.title,
      description: post.description,
    });
  };

  return (
    // <React.Fragment>
    //   {modal ? (
    <React.Fragment>
      <div className="modal-container">
        <form className="modal" onSubmit={onSubmit}>
          <div className="title">
            <input
              className="titleInput"
              type="text"
              name="title"
              required
              value={title}
              onChange={onChange}
            />
            <button onClick={close}>x</button>
          </div>
          <div className="des">
            <textarea
              name="description"
              className="modal-des"
              cols="30"
              rows="10"
              required
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <button onSubmit={onSubmit}>submit</button>
        </form>
      </div>
    </React.Fragment>
    //   ) : null}
    // </React.Fragment>
  );
};

export default Modal;
