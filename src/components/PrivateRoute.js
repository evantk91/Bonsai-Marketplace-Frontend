import React from 'react'
import Home from './Home'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute(props) {
    const {user} = props

    return <Route {...props} render={() => {
        return localStorage.token ? <Home user={user}/> : <Redirect to="login"/>
    }} />
}