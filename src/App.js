import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Likovi from './components/Likovi';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
//prvo da instaliram


function App() {

  const [user, setUser] = useState(null)// prosledicemo ga komponenti kao loggedIn
  // postavljanje usera, potrebno nam je to stanje da bi prosledili Home,
  //da u zavisnosti od toga da li je ulogovan user (user?) Home usmerava na Login ili na Likove

  // { // kad je postavljen ovako jedan objekat usera, ondalao da je neko ulogovan
  //   "id": 1,
  //   "username": "Pera",
  //   "email": "pera@gmail.com",
  //   "password": "pera123"
  // }

  return (
    <Router>
      <Header />
      <nav style={{ backgroundColor: `white`, display: 'flex', justifyContent: 'space-around', fontSize: `30px`, border: `3px solid black` }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/characters">
          <Likovi loggedIn={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
