import React, { Component } from 'react'
import Props from "./Props/Props";

export class App extends Component {
    emp_Name = "Ganesh";
    emp_Loc = ["India","Japan","Russia","Brazil"];
    emp = {
        fullname:"Kummara Ganesh",
        address :"3-81, Laddigam, Chittoor, Andhra Pradesh",
        mob : "+91 8179924835",
    };
    render() {
        return (
            <>
            <h1>Hello World</h1>
            <Props one={this.emp_Name} two={this.emp_Loc} three={this.emp}/>
            </>
        )
    }
}

export default App;
