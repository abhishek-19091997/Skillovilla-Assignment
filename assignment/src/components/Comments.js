import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Comments.css"
import Like from "./Like";

export default function Comments() {
  const { data, setData } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      },[setData]);
  });
  return (
    <div className="Comments">
      {data.map((el,ind) => {
          return (
            <>
              <div key={ind} id="comment_div">
                <div>
                  <img src={el.user_img} alt="" id="image" />
                </div>
                <div id="content_div">
                  <p id="name">{el.user_name}</p>
                  <p id="content">{el.conetent}</p>
                  <Like />
                </div>
              </div>
            </>
          );
      })}
          
    </div>
  );
}
