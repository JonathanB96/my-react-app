import './App.css';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import AddRecipe from './AddRecipe';
import Home from './Home';
import React from 'react';

import { Route, Switch } from "react-router-dom";






function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addrecipe">
          <AddRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
