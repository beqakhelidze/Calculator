import React from "react";

const Screen = ({ Equation, Answer }) => {
    return (
        <div className="Screen">
            <div className='Whole'>{Equation}</div>
            <div className='Current'>{Answer}</div>
        </div>
    )
}

export default Screen;