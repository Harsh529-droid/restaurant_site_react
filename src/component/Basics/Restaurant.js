import React, { useState } from 'react';
import './styles.css';
import Menu from './menuApi';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js'

const uniqueCatList = [
  ...new Set(
    Menu.map((curr) => {
      return curr.category;
    })
  ),
  "All",
]; 



const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu); //hook
  const [catData, setCatData] = useState(uniqueCatList); //state variable

  //catData will have 'uniqueCatList as default value
  //setCatData can change the value in catData by x, through following code
  // setCatData(x);

  const itemFilter = (cat) => { //accepts category clicked
    if (cat === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedMenuData = Menu.filter((curr) => { //filter hi use hoga yha, map nhi chalega
      return curr.category === cat;
    });

    setMenuData(updatedMenuData);
  }

  return (
    <>
      <Navbar catData = {catData} itemFilter = {itemFilter} />
      < MenuCard foodItems={menuData} />
    </>
  );
}

export default Restaurant;

