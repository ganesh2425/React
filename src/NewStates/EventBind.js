import React, { Component } from 'react'
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
    }
    onclickHandler = () => {
        this.setState({
            message:"Good bye"
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
              <button onClick={this.onclickHandler}>Click</button>  
            </div>
        )
    }
}

export default EventBind
