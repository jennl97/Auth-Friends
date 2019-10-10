import React from 'react';
import './App.css';

//import components here
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

//import Route dependency
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component= {Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />       
        
      </header>
    </div>
  );
}

export default App;

