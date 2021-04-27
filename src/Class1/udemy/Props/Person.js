import React from "react";
let Person =(props)=>{
    return(<>
    <p>Hello My name is {props.name}. Im {props.age} years old! </p>
    <p>{props.children}</p>
    </>);
}
export default Person;