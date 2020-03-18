import React from "react";
import "./styles.css";
import Link from "react-router-dom";

export default function Post() {
  return (
    <div className="Post">
      <h1> Todays Posts</h1>
      <ul>
        <li>
          <p>todays posts</p>
          <p>todays posts</p>
          <p>todays posts</p>
          <p>todays posts</p>
        </li>
      </ul>
    </div>
  );
}

{
  /* <ul>
<li>
  <Link to="/post1">
    <p>todays posts</p>
  </Link>
</li>
<li>
  <Link to="/post2">
    <p>todays posts</p>
  </Link>
</li>
<li>
  <Link to="/post3">
    <p>todays posts</p>
  </Link>
</li>
</ul> */
}
