import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: "",
             topic: "react",
        }
    }
    usernameHandler = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler = (event)=>{
        this.setState({
            password: event.target.value
        })
    }
    topicHandler =(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    buttonHandler = (event)=>{
        alert ("${this.state.username} ${this.state.password} ${this.state.topic}")
        event.preventDefault();
    }
    render() {
        return(<>
        <h2 className="text-primary">login</h2> <br/>
        <form onSubmit={this.buttonHandler}>
            <label>UserName</label>
            <input 
            type="text" 
            value={this.state.username}
            onChange={this.usernameHandler}/> <br/>
            <div>
                <label>Password</label>
                <input
                type="password"
                value={this.state.password}
                onChange={this.passwordHandler}/>
            </div> 
            <div>
                <label>Topic</label>
                <select 
                value={this.state.topic}
                onChange={this.topicHandler}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="node-js">Node-Js</option>
                </select>
            </div> <br/>
            <button className="btn btn-success">Submit</button>
        </form>
        
        </>);
            
        
    }
}

export default Forms
