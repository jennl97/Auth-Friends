import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Random from './components/Random';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
     
        <Link to='/login'>Login Page</Link>
        <Link to='/random'>A Random Page</Link>
        <Link to='/friends'>Friends</Link>
  
      <Route path='/login' component={Login} />
      <Route path='/random' component={Random} />
      <PrivateRoute path='/friends' component={FriendsList} />
      </Router>
      </header>
    </div>
  );
}

export default App;
