import React, { Component } from "react";

export class App extends Component {
    state = {
        name: "Test name",
        size: [15],
    };
    changeNameHandler = () => {

        this.setState({
            name: "Priyanka",
            size: 50,
        });
    }

    render() {
        return (
            <>
            <h1>React state basics example :{this.state.name}</h1>
            <h2>{this.state.size}</h2>
            <button onClick={this.changeNameHandler}>Change Name</button>
            
            </>
        )
    }
}

export default App;
