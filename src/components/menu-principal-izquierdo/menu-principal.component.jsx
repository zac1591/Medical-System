import React from 'react';

import MenuItemOptions from '../menu-item/menu-item.component';
import uuid from 'react-uuid';
import CustomButton from '../custom-button/custom-button.component';

import doctorImage from '../../assets/young-female-dr.jpg';

import './menu-principal-izquierdo.scss';


class MenuPrincipal extends React.Component {
    constructor() {
        super();

        this.state = {
            menuOptions: [
                {titulo: 'Overview', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Actividad', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Pacientes', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Agenda', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Notas', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Caja', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Inventarios', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Logística', iconUrl: 'someUrl', id: uuid()},
                {titulo: 'Reportes', iconUrl: 'someUrl', id: uuid()}
            ]
        }
    }

    render() {
        return (
            <div className="contenedor-principal-flex">
                <h1 className="titulo-barra-menu">Flow</h1>
                <div className="logoContainer">
                    <img src={doctorImage} className="doctorImage" alt="Doctor"/>
                </div>
                <CustomButton>Agregar Paciente</CustomButton>
                {
                    this.state.menuOptions.map(({titulo, id}) => (
                        <MenuItemOptions key={id} titulo={titulo}/>
                    ))
                }
            </div>
        )
    }

}

export default MenuPrincipal;