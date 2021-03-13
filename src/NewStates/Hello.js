import React from "react";
class Hello extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Welcome to Hotel Grand"
        }
    }
    
    changeMessage = () => {
        this.setState({
            message:"Thank you visit again"
        })
    }
    render(){
        return<>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeMessage}>subscribe</button>
        </>
    }
}
export default Hello;