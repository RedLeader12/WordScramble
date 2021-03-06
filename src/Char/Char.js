import React from 'react';


const char = (props) => {

    const fontColor = '#' + Math.floor(Math.random()*9260).toString(16);

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        color: fontColor

    };


    return (
        <div className="scramble" style={style} onClick={props.click}> {props.character} </div>
    );
}

export default char