import React from 'react';

const MenuCard = ({menuData}) => {
  
  return(  
    <>
        <div className='main-card--container'>
            
            { menuData.map((curr) => {
              
              return(
                 <>
                      <div className='card-container'>
                      <div className='card'>
                         <div className='card-body'>
                              <span className='card-number card-circle subtle'>1</span>
                              
                              <span className='card-author subtle'>Breakfast</span>
          
                              <h2 className='card-title'>Maggi</h2>
                              
                              <span className='class-description subtle'>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                              Temporibus laborum culpa sapiente maxime, inventore iste.
                              </span>
          
                              <div className='card-read'>Read</div>
                         </div>     
                              {/* <img src='' alt='' className='card-media' /> */}
                              <span className='card-tag subtle'>Order Now</span>
                      </div>
                      </div>
                 </>
              ); 
            })}  

        </div>
    </>
  ); 
}

export default MenuCard;

