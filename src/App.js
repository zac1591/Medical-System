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
  Route
  
} from 'react-router-dom'

// Switch,
//   Link,
//   Redirect import later

import Overview from "./pages/overview";
import Pacientes from './pages/pacientes'
import Actividad from './pages/actividad-page/actividad.page'
import Agenda from './pages/agenda-page/agenda.page'
import Notas from './pages/notas-page/notas.page'
import Caja from './pages/caja-page/caja.page'
import Inventario from './pages/inventario-page/invetario.page'
import Logistica from './pages/logistica-page/logistica.page'
import Reportes from './pages/reportes-page/reportes.page'

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
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/actividad" component={Actividad} />
        <Route exact path="/pacientes" component={Pacientes} />
        <Route exact path="/agenda" component={Agenda} />
        <Route exact path="/notas" component={Notas} />
        <Route exact path="/caja" component={Caja} />
        <Route exact path="/inventario" component={Inventario} />
        <Route exact path="/logistica" component={Logistica} />
        <Route exact path="/reportes" component={Reportes} />
        
        <PrivateRoute path="/main" component={ContenedorPrincipal} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
