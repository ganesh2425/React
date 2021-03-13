import React, { Component } from 'react'

class App extends Component {
    state = {
        email:"",
    }
    emailHandler = (event) => {
        this.setState({email:event.target.value})
    }
    btnHandler = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <>
              <nav className="navbar navbar-dark bg-dark">
                  <a href="/" className="navbar-brand">React login forms</a>
                  </nav>
                  <div className="container mt-4">
                      <div className="row">
                          <div className="col-md-6">
                              <form>
                                  <h3>login</h3> <br/>
                                  <label>Email</label>
                                  <input type="text"
                                  value={this.state.email}
                                  onChange={this.emailHandler}
                                  /> 
                                  <br/>
                                  <button value="submit" onClick={this.btnHandler}>Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
            </>
        )
    }
}

export default App
