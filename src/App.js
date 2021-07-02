
import React from 'react'
import './App.scss';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/login/Login';
 import Register from './components/Register/Register';
 import Watch from './components/watch/Watch';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/register"><Register/></Route>
            <Route  path="/login"><Login/></Route>
            <Route  path="/watch"><Watch/></Route>
          </Switch>
        </Router>  
    </div>
  );
}

export default App;
