/*import React from "react";
import Navbar from "./Nav-Table/Navbar";
import Table from "./Nav-Table/Table"
function App () {
    return <>
    <Navbar/>
    <Table/>
    </>
}export default App;*/

import React from "react";
import Header from "./Header/Header";
class App extends React.Component{
    emp_Name = "Priyanka";
    emp_Loc = ["India","Canada","Japan","England"];
    emp = {
        fullname :"Kummara Ganesh",
        address :"#25, Bellandur, Bangalore 560103"
    }
    
    render(){
        return <React.Fragment>
            <h1>Hello, Bangalore</h1>
            <Header one={this.emp_Name} two={this.emp_Loc} three={this.emp} />

        </React.Fragment>
    }
}export default App;