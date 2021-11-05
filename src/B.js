import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeValue } from './features/counter/counterSlice.js'
import "./B.css"

function B () {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="b-div">
            <div>
                Please enter anything:-
            </div>
            <input 
                type="text" 
                className="b-textfield" 
                placeholder="Enter please"
                onChange={(e)=>dispatch(changeValue(e.target.value))}
                value={value}
            >

            </input>
        </div>);
}

export default B;