import React from 'react';

import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import doctorImage from '../../assets/young-female-dr.jpg';

import './menu-principal-izquierdo.scss';


const MenuPrincipal = () => ( 
    <div className="contenedor-principal-flex">
        <h1 className="titulo-barra-menu">Flow</h1>
        <div className="logoContainer">
            <img src={doctorImage} className="doctorImage" alt="Doctor"/>
        </div>
        <CustomButton>Agregar Paciente</CustomButton>
        
        <Link className='option' to='/overview'>Overview</Link>
        <Link className='option' to='/actividad'>Actividad</Link>
        <Link className='option' to='/pacientes'>Pacientes</Link>
        <Link className='option' to='/agenda'>Agenda</Link>
        <Link className='option' to='/notas'>Notas</Link>
        <Link className='option' to='/caja'>Caja</Link>
        <Link className='option' to='/inventario'>Inventario</Link>
        <Link className='option' to='/logistica'>Logistica</Link>
        <Link className='option' to='/reportes'>Reportes</Link>
        <Link className='option' to='/home'>Log out</Link>

    </div>
)

export default MenuPrincipal;