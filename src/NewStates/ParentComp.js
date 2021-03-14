import React, { Component } from 'react';
import ChildComp from "./ChildComp";

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
        greetParent=()=>{
            alert('Hello {this.state.parentName}')
        }

    
    render() {
        return (
            <>
            <ChildComp greetHandler={this.greetParent}/>
            </>
        )
    }
}

export default ParentComp
