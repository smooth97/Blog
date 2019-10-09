import React from 'react';

const Modal = ({ post, modal, close }) => {
  return (
    <React.Fragment>
      {modal ? (
        <React.Fragment>
          <div className="modal-container">
            <div className="modal">
              <div className="title">
                <h1>{post.title}</h1>
                <button onClick={close}>x</button>
              </div>
              <div className="des">
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
