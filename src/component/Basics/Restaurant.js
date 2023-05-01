import React, { useState } from 'react';
import './styles.css';
import Menu from './menuApi';
import MenuCard from './MenuCard.js';

const Restaurant = () => {
 const [menuData, setMenuData] = useState(Menu); //hook

  return (
    <>
      <MenuCard foodItems={menuData} />
    </>
  );
}

export default Restaurant;

