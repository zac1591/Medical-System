import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useAuth } from '../context/auth'

export default function PrivateRoute({component : Component, ...rest}) {
    const {authTokens} = useAuth()
    // Use this to test and comment the line above: let authTokens = true
    return (
        <Route { ...rest} render = {(props) =>
            authTokens ? ( <Component { ...props } />) 
            : ( <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          /> )
        }
        />
    )
}
