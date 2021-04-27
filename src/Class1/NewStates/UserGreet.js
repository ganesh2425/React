import React, { Component } from 'react'

class UserGreet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        /* SHORT CIRCUIT OPERATORS */

        /*return this.state.isLoggedIn && <div>Welcome to Bangalore</div>

        /* TERNARY CONDITIONAL OPERATORS */

        return this.state.isLoggedIn ? (
            <div>Welcome to Bangalore</div>
        ) : (
            <div>Thank you!!!</div>
        )

        /* ELEMENT VARIABLES */

        /*let message
        if (this.state.isLoggedIn){
            message = <div>Welcome to Bangalore</div>
        } else {
            message = <div>Thank you!!!</div>
        }
        return <div>{message}</div>

        /* IF/ELSE CONDITION */

        /*if (this.state.isLoggedIn){
            return <div>Hello World</div>
        } else {
            return <div>Good Morning</div>
        }
        
       /* return (
            <div>
             <div>Welcome Bangalore</div> 
             <div>Thank you!!!!</div>
            </div>
        )*/
    }
}

export default UserGreet
