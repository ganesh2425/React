import React from "react";
import Wish from "./Component/Wish";
import Greet from "./Component/Greet";
function App (){
    let message = "Hello, Good Morning";
    return <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className="navbar-brand">React event binding basics</a>
        </nav>
        <Wish one={message}/>
        <Greet two={message}/>


    </React.Fragment>
}
export default App;