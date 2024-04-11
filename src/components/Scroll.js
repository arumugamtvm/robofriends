import React from "react";
const Scroll = (props) => {
    return (<div style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '800px',
        scrollbarWidth: 'none',
        margin: '5px',
        borderRadius: '10px',
        padding: '10px'
    }}>
        {props.children}
    </div>)

}

export default Scroll