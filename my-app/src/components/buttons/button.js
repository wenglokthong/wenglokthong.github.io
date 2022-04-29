import React from 'react';

const MyButton = (_name,_cssStyle) =>{
    return (
        //if no cssStyle specified, use default(?)
        <button className = {_cssStyle}>
            {_name}
        </button>
    )
}

export default MyButton;