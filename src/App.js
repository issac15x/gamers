import { directive } from "@babel/types";
import React from "react";
import Landing from "./components/Landing";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component = {Landing} />
          <Route path='/login' exact component = {Login} />
          <Route path='/signup' exact component = {Signup} />
          {/* <Route path='/home' exact component = {Home} /> */}
        </Switch>
      </Router>
    </>
    

  );
}

export default App;
