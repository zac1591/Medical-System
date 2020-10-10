import React from 'react'

import MenuPrincipal from '../components/menu-principal-izquierdo/menu-principal.component'

import './contenedor.principal.scss'

function ContenedorPrincipal() {
    return (
        <div className="contenedor-flexible">
            <MenuPrincipal />
        </div>
    )
}

export default ContenedorPrincipal;
