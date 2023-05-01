import React from 'react'

const Navbar = ( { catData, itemFilter } ) => {
   
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                   {
                    catData.map((curr) => {
                        return(
                         
                            <button 
                            className='btn-group__item'
                            onClick={() => itemFilter(curr)} 
                            > {curr} 
                            </button>
                          
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

export default Navbar;