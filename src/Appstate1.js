import React, { Component } from 'react';

export class App extends Component {
    state = {
        name: "Ganesh",
        size: [5],
    };
    changeNameHandler = () => {
        console.log("Ganesh inside changeNameHandler");
        this.setState({
            name: "Priyanka",
            size: 20,
        });
    }

    render() {
        return (
            <>
            <h2>State example :{this.state.name}</h2>
            <h3>size:{this.state.size}</h3>
            <button onClick={this.changeNameHandler}>change name</button>
            
            </>
        )
    }
}

export default App;
