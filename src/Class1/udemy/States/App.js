import React from "react";
import Person from "./udemy/States/Person";
class App extends React.Component{
    state = {
        persons: [
        {name:"Max", age:25},
        {name:"David", age:60},
        {name:"Sam", age:34},
    ]
}

switchHandler =()=>{
    console.log("was clicked");
    this.setState({
        persons: [
            {name:"Wilson", age:10},
            {name:"Stokes", age:26},
            {name:"Archer", age:14}
        ]
    })
}
    render(){
        return(<>
        <h3>Hello Sir/Madam Good Morning</h3>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={this.switchHandler}>Switch Name</button>
        </>);
    }
}
export default App;