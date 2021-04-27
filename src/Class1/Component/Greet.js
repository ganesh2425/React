import React from "react";
function Greet (props){
    return(
        <>
        <div className="card m-4">
            <div className="card-header">React-props in Function Component</div>
            <div className="card-body">{props.two}</div>
        </div>
        </>

    );
}
export default Greet;