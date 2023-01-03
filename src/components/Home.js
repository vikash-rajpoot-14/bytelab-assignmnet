import React, { useState } from "react";
import { useNavigate } from "react-router";
import DropDown from "./DropDown";
import Dropdown1 from "./Dropdown1";

function Home() {
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [style1, setStyle1] = useState({});

  const [style, setStyle] = useState({
    display: "flex",
    listStyle: "none",
    margin: "1vw 0vw",
    fontSize: "2vw",
  });

  const handleClick = () => {
    setStyle({ ...style, opacity: 1, height: "200px" });
    setStyle1({ ...style1, opacity: 1 });
  };
  const handledrop1 = () => {
    setShow1(!show1);
  };
  const handledrop2 = () => {
    setShow2(!show2);
  };
  const handleHome = () => {
    setStyle1({});
    setStyle({
      display: "flex",
      listStyle: "none",
      margin: "1vw 0vw",
      fontSize: "2vw",
    });
  };
  const handeNew = () => {
    navigate("/new");
  };
  return (
    <div className="container">
      <nav className="navbar" style={style}>
        <ul className="nav" style={style1}>
          <li className="nav-item" id="home" onClick={handleHome}>
            Home
          </li>
          <li className="nav-item">About</li>
          <li className="nav-item" id="new" onClick={handeNew}>
            New
          </li>
        </ul>
        <div className="burger" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <div className="search">
        <input className="input" type="text" placeholder="search" />
      </div>
      <hr className="hr"></hr>
      <div className="mid">
        <ul className="mid-nav">
          <li className="mid-item" onClick={handledrop1}>
            Dropdown
          </li>
          {show1 && <Dropdown1 />}
          <li className="mid-item">Filter1</li>
          <li className="mid-item">Filter2</li>
          <li className="mid-item">Filter3</li>
          <li className="mid-item">Filter4</li>
          <li className="mid-item">Filter5</li>
          <li className="mid-item" onClick={handledrop2}>
            Dropdown
          </li>
          {show2 && <DropDown />}
        </ul>
      </div>
      <hr className="hr"></hr>
      <div className="lower">
        <div className="box" id="box1">
          <p className="one">one</p>
        </div>
        <div className="box" id="box2">
          <p className="one">two</p>
        </div>
        <div className="box" id="box3">
          <p className="one">three</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
