import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

import ContenedorPrincipal from './pages/contenedor.principal';

import './App.css';

function App() {
  return (
    <ContenedorPrincipal />
  );
}

export default App;
