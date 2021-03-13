import React, { Component } from 'react';
class App extends Component {
    state = {
        username : "",
    }
    usernameHandler =(event)=>{
        this.setState({
            username: event.target.value,
        });
    }
    render() {
        return (
            <div>
                <h1>login</h1>
            <form>
                <label>User Name</label> <br/>
                <input type="text" 
                value={this.state.username} 
                onChange={this.usernameHandler} 
                name="username" /> <br/>
                <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}

export default App;
