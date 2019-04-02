import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <App/>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
