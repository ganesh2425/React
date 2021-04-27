import React from "react";
import Greet from "./NewProps/Greet";
import Welcome from "./NewProps/Welcome";
function App(){
    return<>
    <h1>Hello World</h1>
    <Greet name="mirchi" heroName="Rebal Star"/>
    <Greet name="temper" heroName="Young Tiger"/>
    <Greet name="singam" heroName="Surya"/>

    
    <Welcome name="bagamathi" heroinName="Anushka"/>
    <Welcome name="oh-baby" heroinName="Samantha"/>
    <Welcome name="check" heroinName="Nithin"/>
    </>
}
export default App;