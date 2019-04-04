import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { withUser } from '../context/UserProvider'


class Auth extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: "",
            formToggle: false
        }
    }

    toggleForm = () => {
        this.setState(prevState => ({ formToggle: !prevState.formToggle}))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.login(credentials)

        this.setState({
            username: "",
            password: ''
        })
    }

    handleSignUpSubmit = e => {
        e.preventDefault()
    
        //call a signup function
        const credentials = {
            username: this.state.username,
            password: this.state.password 
        }

        this.props.signup(credentials)

        this.setState({
            username: "",
            password: ""
        })
    
    }


    render(){
        // console.log(this.props)
        return (
            <div className="auth-container">
                <div className="title"></div>
                <div className="login-signup">
                {this.state.formToggle ?
                <>
                    <h1 className="welcome-text">Come Play!</h1>
                    <AuthForm
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignUpSubmit}
                        btnText="Sign Up"
                    />
                    <p>{this.props.errMsg}</p>
                    <button onClick={this.toggleForm} className="toggle-button"> Already a User? </button>
                </>
                :
                <>
                    <h1 className="welcome-text">Welcome Back</h1>
                    <AuthForm
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLoginSubmit}
                        btnText="Login"
                    />
                    <p>{this.props.errMsg}</p>
                    <button onClick={this.toggleForm} className="toggle-button"> Not a user yet?</button>
                </>
                }
                </div>
            </div>
        )
    }
}

export default withUser(Auth)