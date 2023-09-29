import React from "react";
import { useState } from "react";
import BirdLikes from "./BirdLikes";

const BirdsList = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const addData = (e) => {
    e.preventDefault();
    if (name !== "") {
      setData([...data, { name: name }]);
    }
    setName("");
  };

  return (
    <div>
      <h1>Bird List</h1>
      <div>
        <p>Add Bird</p>
        <input
          type="text"
          placeholder="Enter the new bird name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addData}>Add</button>
      </div>
      <ul>
        {data.map((item, id) => (
          <li key={id}>
            <BirdLikes name = {item.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirdsList;
