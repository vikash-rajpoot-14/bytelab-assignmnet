import React, { useState } from "react";

function New() {
  const [show, setShow] = useState([{ show: "" }]);
  const handleClick = () => {
    setShow([...show, { show: "" }]);
  };
  const handleRemove = (index) => {
    const idx = show.length - 1;
    const List = [...show];
    List.splice(idx, 1);
    setShow(List);
  };
  return (
    <div>
      <div className="map">
        {show.map((user, index) => (
          <form key={index} className="form">
            <input
              className="in"
              placeholder="Demo1"
              type="text"
              id="fname"
              name="fname"
            />
            <input
              className="in"
              placeholder="Demo2"
              type="text"
              id="lname"
              name="lname"
            />
          </form>
        ))}
      </div>
      <button onClick={handleClick}>add more</button>
      <button onClick={() => handleRemove()}>remove</button>
    </div>
  );
}

export default New;
