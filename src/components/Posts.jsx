import React, { useContext } from "react";
import Item from "../container/Item";
import { PostingContext } from "./PostContext";

const Posts = () => {
  const [postings, setPostings] = useContext(PostingContext);

  return (
    <div className="postContainer">
      <div className="post-nav">
        <h2 className="id">ID</h2>
        <h2 className="title">T</h2>
        <h2 className="date">Date</h2>
        <h2 className="action">Action</h2>
      </div>
      <Item />
    </div>
  );
};

export default Posts;
