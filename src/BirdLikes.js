import React from "react";
import { useState } from "react";

const BirdLikes = ({ name }) => {
  let [count, setCount] = useState(0);

  const handleCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
      <h4>{name}</h4>
      <p>
        Likes : {count}
        <button onClick={handleCount}>+</button>
      </p>
    </>
  );
};

export default BirdLikes;
