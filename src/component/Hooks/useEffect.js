import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {

  const initialData = 15;
  const [myNum, setMyNum] = useState(0);

    useEffect(() => {
      document.title = `Chats(${myNum})`;  // ` ` above tab key  vs ' ' near semicolon key
    }/**/ ); 
       //if you want this to get triggered once
       // add < , [] > in above /* */ place

  return (
    <>
      <p>{myNum}</p>
      <div className="center_div">
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>


        <div class="button2"
          onClick={() => (myNum > 0) ? setMyNum(myNum - 1) : setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
