import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friend from './components/Friend';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <PrivateRoute exact path="/friends">
        <Friend/>
      </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
