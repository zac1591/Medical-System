import React from 'react'
import Auth from '../components/security/auth'

import MenuPrincipal from '../components/menu-principal-izquierdo/menu-principal.component'
import Overview from './overview'
import Pacientes from './pacientes'

import './contenedor.principal.scss'

function ContenedorPrincipal(props) {
    return (
        <div className="contenedor-flexible">
            <MenuPrincipal />
            <button onClick={() =>
            {
                Auth.logout(() => {
                    props.history.push("/")  
                }

                )
            }
            }>Log out</button>
            Welcome, {Auth.session_user}
        </div>
    )
}

export default ContenedorPrincipal;
