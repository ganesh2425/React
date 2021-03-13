import React, { Component } from 'react';
class App extends Component {
state = {
    name: "Hello World",
}
sayGM = () => {
    this.setState({name: "Good Morning"});
}
sayGA = () => {
    this.setState({name: "Good Afternoon"});
}
sayGN = () => {
    this.setState({name: "Good Night"});
}


    render() {
        return (
            <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">Events in props handling</a>    
        </nav>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card m-4">
                    <div className="card-header"> Message: {this.state.name}
                        <div className="card-body">
                        <button onClick={this.sayGM} className="btn btn-primary mr-2">
                        Good Morning
                        </button>
                        <button onClick={this.sayGA} className="btn btn-success mr-2">
                        Good Afternoon
                        </button>
                        <button onClick={this.sayGN} className="btn btn-danger mr-2">
                        Good Night
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </>
        )
    }
}

export default App;
