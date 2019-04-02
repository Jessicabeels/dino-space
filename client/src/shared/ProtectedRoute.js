import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withUser } from '../context/UserProvider.js'
import ErrorBoundary from '../shared/ErrorBoundary.js'

const ProtectedRoute = props => {
    const { path, redirectTo, component: Component, ...rest } = props
    return (
        props.token
            ? <Route path={path} render={rProps => 
                <ErrorBoundary>
                    <Component {...rProps} {...rest}/>
                </ErrorBoundary>
                } />
            : <Redirect to={redirectTo} />
    )
}

export default withUser(ProtectedRoute)