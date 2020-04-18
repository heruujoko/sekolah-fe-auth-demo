import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Signin from "./pages/Signin";

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


function App() {
  return (
    <div className="App">
      <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Route path="/" exact>
          <Signup />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
      </Router>
      </AlertProvider>
    </div>
  );
}

export default App;
