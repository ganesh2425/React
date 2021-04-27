import React, { Component } from 'react'

class App extends Component {
    state ={
        email:"",
        password:"",
    }
    nameHandler = (event) => {
        this.setState({email:event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password:event.target.value})
    }
    getDataHandler = (event) => {
        console.log(this.email,this.password);
        event.preventDefault();  
    }
    render() {
        return (
            <>
              <nav className="navbar navbar-dark bg-dark">
                  <a href="/" className="navbar-brand">React Forms</a>
                  </nav>
                  <h3>login</h3>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            value={this.state.email}
                            onChange={this.nameHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.passwordHandler}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={this.getDataHandler}>Submit</button>
                    </form>

                    </div>
                </div>
            </div> 
            </>
        )
    }
}

export default App
