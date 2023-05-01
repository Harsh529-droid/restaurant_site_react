import React from 'react';
import './styles.css';


const MenuCard = ({foodItems}) => {
  
  return(  
    <>
    
    
    
        <section className='main-card--cointainer'>
            
            { foodItems.map((curr) => {
              
              return(
                 <>
                      <div className='card-container' key = {curr.id}>
                      <div className='card'>
                         <div className='card-body'>
                              <span className='card-number card-circle subtle'>{curr.id}</span>
                              
                              <span className='card-author subtle'>{curr.category}</span>
          
                              <h2 className='card-title'>{curr.name}</h2>
                              
                              <span className='class-description subtle'>
                                {curr.description}
                              </span>
          
                              <div className='card-read'>Read</div>
                         </div>     
                              <img src = {curr.image} alt='' className='card-media' />
                              <span className='card-tag subtle'>Order Now</span>
                      </div>
                      </div>
                 </>
              ); 

            })}  

        </section>

    </>
  ); 

}

export default MenuCard;

