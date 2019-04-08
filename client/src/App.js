import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import ProtectedRoute from './shared/ProtectedRoute.js'

import NotFound from './components/pages/NotFound.js'
import Home from './components/pages/Home.js'

import Game from './components/pages/Game.js'
import GameOver from './components/pages/GameOver'
import './style.css'

class App extends Component {

    
    render(){
        const { token, logout, user } = this.props
        // document.title = this.props.location.pathname.slice(1)(0).toUpperCase() + this.props.location.pathname.slice(2)
        return (
            <div>
                {token && <button onClick={logout} className="logout-button">Logout</button>}
                {token && user.isAdmin && <button>U</button>}
                <Switch>
                    <Route 
                        exact path="/"
                        render={rProps => 
                            token 
                                ? <Redirect to="/pages/home"/>
                                : <Auth {...rProps}/>}/>
                    <ProtectedRoute
                        token={token}
                        path="/home"
                        redirectTo="/"
                        component={rProps => <Home {...rProps} />} />
                    {/* <ProtectedRoute
                        token={token}
                        path="/pages/prepare"
                        redirectTo="/"
                        component={Prepare}/> */}
                    <ProtectedRoute
                        token={token}
                        path="/pages/game"
                        redirectTo="/"
                        component={rProps => <Game {...rProps} />} />
                    <ProtectedRoute
                        token={token}
                        path="/pages/gameover" 
                        redirectTo="/"
                        component={rProps => <GameOver {...rProps} />} />
                    {/* <ProtectedRoute
                        token={token}
                        path="*"
                        redirectTo="/"
                        component={NotFound}/>   */}
                </Switch>
            </div>
        )
    }
}


export default withUser(App)