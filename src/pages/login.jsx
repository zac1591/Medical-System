import React from 'react'
import Auth from '../components/security/auth'

export default function Login(props){
    return(
        <div>
            Login <br />
            <button onClick={
                () => {
                    Auth.login(() => {
                        props.history.push("/")
                    })
                }
            }>Login</button>
        </div>
    )
}