import React, { Component } from 'react';
import Hello from "./NewStates/Hello";
import Counter from "./NewStates/Counter";
import EventBind from "./NewStates/EventBind";
import ParentComp from "./NewStates/ParentComp";
import UserGreet from './NewStates/UserGreet';
import NameList from './NewStates/NameList';
function App() {
    return (
        <>
          <h1>Hello Customers</h1> <hr/>
          <Hello/> <hr/>
          <Counter/> <hr/>
          <EventBind/> <hr/>
          <ParentComp/> <hr/>
          <UserGreet/> <hr/>
          <NameList/>
          
        </>
    )
}

export default App;
