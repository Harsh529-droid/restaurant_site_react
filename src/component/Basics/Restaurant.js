import React, { useState } from 'react';
import './styles.css';
import Menu from './menuApi';
import MenuCard from './MenuCard.js';

const App = () => {
 const [menuData, setMenuData] = useState(Menu); //hook

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
}

export default App

