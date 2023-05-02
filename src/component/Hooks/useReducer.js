import React, { useReducer } from 'react'
import './style.css'

const reducer = (state, action) => {
    if (action.type === 'INCR') {
        state += 1;
    }
    if (action.type === 'DECR' && state > 0) {
        state -= 1;
    }
    return state;
}

const UseReducer = () => {

    const initialData = 15;

    //destructuring const [x,y] = arr;

    const [state, dispatch] = useReducer(reducer, initialData);
    // const [state, dispatch] = useReducer(reducer, initialData);
    /*         |       |                      \             /
               \    calls reducer func      a function     initial data provided
               |
           stores value of initialData   
    */

    return (
        <>
            <div className="center_div">
            <p>{state}</p>
                <div class="button2"
                    onClick={() => dispatch({ type: 'INCR' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2"
                    onClick={() => dispatch({ type: 'DECR' })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseReducer