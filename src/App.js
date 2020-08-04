import React from 'react';
import './App.css';

import Register from './components/register.component';
import Views from './components/view.comonent';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Register}/> 
          <Route path="/view" component={Views}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
