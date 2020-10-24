import React from 'react'

import MenuPrincipal from '../components/menu-principal-izquierdo/menu-principal.component'
import Overview from './overview'
import Pacientes from './pacientes'

import './contenedor.principal.scss'

function ContenedorPrincipal(props) {
    return (
        <div className="contenedor-flexible">
            <MenuPrincipal />
        </div>
    )
}

export default ContenedorPrincipal;
