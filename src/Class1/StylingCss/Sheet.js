import React from 'react'
import "./myStyle.css";

function Sheet(props) {
    let className = props.primary ? 'primary' : ""
    return (
        <div>
            <h2 className={" ${className} font-xl"}>Heading Page</h2>
        </div>
    )
}

export default Sheet
