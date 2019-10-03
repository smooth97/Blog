import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdGetApp } from "react-icons/md";

const New = () => {
  //MdGetApp

  return (
    <div className="newContainer">
      <div className="btn">
        <Link to="/">
          <IoMdArrowRoundBack className="back" />
        </Link>
        <MdGetApp className="save" />
      </div>
      <div className="titleContainer">
        <form>
          <input
            type="text"
            name="todo list"
            autoComplete="off"
            required
            //   value={input}
            //   onChange={onChange}
          />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Title</span>
          </label>
        </form>
      </div>
      <textarea cols="30" rows="10" required></textarea>
    </div>
  );
};

export default New;
