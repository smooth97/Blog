import React from "react";
import Item from "../container/Item";


const Posts = ({onCreate, onToggle, posts}) => {

  const dates = new Date();
    const year = dates.getFullYear();
    const month = dates.getMonth();
    const day = dates.getDate();
    const now = `${year}-${month}-${day}`;

  return (
    <div className="postContainer">
      <div className="post-nav">
        <h2 className="id">ID</h2>
        <h2 className="title">T</h2>
        <h2 className="date">Date</h2>
        <h2 className="action">Action</h2>
      </div>
        {posts.map(post => (
           <Item key={post.id} post={post} onCreate={onCreate} onToggle={onToggle} date={now}/>
        ))}
    </div>
  );
};

export default Posts;
