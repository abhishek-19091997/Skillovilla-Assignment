import React from "react";
import { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

export default function Like() {
    const [like, setLike] = useState(0);
    const removeLike = () => {
        setLike(like-1)
    }
    const addLike = () => {
        setLike(like+1);
    }
  return (
    <div
      style={{
        display: "flex",
              gap: "10px",
        alignItems:"center"
      }}
    >
      <p>{like}</p>
     
      <BiCaretDown onClick={removeLike} />
      
      <BiCaretUp onClick={addLike} />
    </div>
  );
}
