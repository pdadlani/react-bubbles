import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  const handleLogOut = event => {
    localStorage.removeItem('token');
    props.history.push('/')
  }

  return (
    <>
      <button onClick={handleLogOut}>Log Out</button>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
