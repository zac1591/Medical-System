import React, { useState } from "react"
import Home from './pages/home'
import ContenedorPrincipal from './pages/contenedor.principal';
import './App.css';
import PrivateRoute from './components/security/PrivateRoute'
import { AuthContext } from './components/context/auth'
import Login from './pages/login';
import Signup from './pages/signup';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

function App() {
  //Building tokens lists and variables
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
  
    const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/main" component={ContenedorPrincipal} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
