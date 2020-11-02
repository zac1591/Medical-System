import React from 'react'

import MenuPrincipal from '../components/menu-principal-izquierdo/menu-principal.component'

import './contenedor.principal.scss'
import { Button } from "../components/forms/AuthForm";
import { useAuth } from "../components/context/auth";

function ContenedorPrincipal(props) {
    const {setAuthTokens} = useAuth()
    function logOut(){
        setAuthTokens()
    }
    return (
        <div className="contenedor-flexible">
            <MenuPrincipal />
            <Button onClick={logOut}>Log out</Button>
        </div>
    )
}

export default ContenedorPrincipal;
