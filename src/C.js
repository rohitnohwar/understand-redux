import React from 'react';
import { useSelector } from 'react-redux'
import "./B.css"

function C () {
    const value = useSelector((state) => state.counter.value)
    return (
        <div className="b-div c-div">
            <div>Output : - </div>
            <div>{value}</div>
        </div>
        );
}

export default C;