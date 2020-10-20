import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

import ContenedorPrincipal from './pages/contenedor.principal';
import PrivateRoute from './components/security/privateroute'
import Login from './pages/login'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={ContenedorPrincipal} />
        <PrivateRoute exact path="/main" component={ContenedorPrincipal} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={() => "404 Not found"} />
      </Switch>            
    </Router>
  );
}

export default App;
