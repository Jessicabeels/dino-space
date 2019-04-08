import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import AstroProvider from './components/AstroProvider.js';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
        <AstroProvider>       
            <App/>
        </AstroProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
