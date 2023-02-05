import React, { useEffect } from "react";
import "./commentBox.css"

export default function CommentBox() {
  const addComment = (e) => {
    if (e.key === "Enter") {
       fetch(" http://localhost:3000/comments", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           user_name: "Rakib",
           user_img:
             "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
           conetent: e.target.value,
         }),
       });
    }
  };
 
  return (
    <div className="commentBoxDiv">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
          width="50"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Join the discussion..."
          id="commentBox"
          onKeyPress={addComment}

        />
      </div>
    </div>
  );
}
