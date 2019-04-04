import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import ProtectedRoute from './shared/ProtectedRoute.js'

import NotFound from './components/NotFound.js'
import Home from './components/Home.js'
import Intro from './components/Intro.js'
import Prepare from './components/Prepare'
import Game from './components/Game.js'
import GameOver from './components/GameOver'
import './style.css'

class App extends Component {
    render(){
        const { token, logout, user } = this.props
        return (
            <div>
                {token && <button onClick={logout} className="logout-button">Logout</button>}
                {token && user.isAdmin && <button>U</button>}
                <Switch>
                    <Route 
                        exact path="/"
                        render={rProps => 
                            token 
                                ? <Redirect to="/home"/>
                                : <Auth {...rProps}/>}/>
                    {/* addpage instead of posts
                     */}
                    <ProtectedRoute
                        token={token}
                        path="/home"
                        redirectTo="/"
                        component={Home}/>
                    {/* <ProtectedRoute
                        token={token}
                        path="*"
                        redirectTo="/"
                        component={NotFound}/> */}
                    <ProtectedRoute
                        token={token}
                        path="/intro"
                        redirectTo="/"
                        component={Intro}/> 
                    <ProtectedRoute
                        token={token}
                        path="/prepare"
                        redirectTo="/"
                        component={Prepare}/>
                    <ProtectedRoute
                        token={token}
                        path="/game"
                        redirectTo="/"
                        component={Game}/>
                    <ProtectedRoute
                        token={token}
                        path="/gameover" 
                        redirectTo="/"
                        component={GameOver}/>  
                </Switch>
            </div>
        )
    }
}


export default withUser(App)