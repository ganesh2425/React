import React, { Component } from 'react';
class App extends Component {
    state = {
        counter: 0,
    }
    IncrHandler = () => {
        this.setState({counter:this.state.counter +1});
    }
    DecrHandler = () => {
        this.setState({counter:this.state.counter -1});
    }

    render() {
        return (
            <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">Events in props handling</a>    
        </nav>
        <h1>Counter value: {this.state.counter}</h1>
        <button onClick={this.IncrHandler} className="btn btn-primary mr-4">Increment</button>
        <button onClick={this.DecrHandler} className="btn btn-success">Decrement</button>   
            
            </>
        )
    }
}

export default App;
