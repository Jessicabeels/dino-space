import React from 'react'


const AuthForm = props => {
    const { handleChange, handleSubmit, username, password, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="username"
                required/>
            <input
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm