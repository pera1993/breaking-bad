import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Likovi from './components/Likovi';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { btnLogout, linkStyle, navStyle, userDiv } from './components/Styled Components/styleVariables';



function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <Header />
      <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/login">Login</Link>
        <Link style={linkStyle} to="/register">Register</Link>
        <Link style={linkStyle} to="/characters">Characters</Link>
        {user ? 
        <div style={userDiv}>
          <div>{user.username}</div>
           <button style={btnLogout} onClick={() => { setUser(null) }}>Log Out</button>
       </div> 
       :
        ``}

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
