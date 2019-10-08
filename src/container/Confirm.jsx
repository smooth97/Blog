import React from 'react';

const Confirm = ({ open, close, post, remove }) => {
    return (
        <React.Fragment>
            {
            open ?
            <React.Fragment>
            <div className="confirm-container">
                <div className="confirm">
                    <p>Delete this posting ?</p>
                <div className="btn">
                    <button onClick={() => remove()}>Yes</button>
                    <button onClick={close}>No</button>
                </div>
                </div>
            </div>
            </React.Fragment>
            :
            null
            }
        </React.Fragment>
    )
}

export default Confirm