import React from 'react';
import './styles.css';


const MenuCard = ({ foodItems }) => {

  return (
    <>



      <section className='main-card--cointainer'>

        {foodItems.map((curr) => {

          const { id, category, name, description, image } = curr; //Destructuring

          return (
            <>
              <div className='card-container' key={id}>
                <div className='card'>
                  <div className='card-body'>
                    <span className='card-number card-circle subtle'>{id}</span>

                    <span className='card-author subtle'>{category}</span>

                    <h2 className='card-title'>{name}</h2>

                    <span className='class-description subtle'>
                      {description}
                    </span>

                    <div className='card-read'>Read</div>
                  </div>
                  <img src={image} alt='' className='card-media' />
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

