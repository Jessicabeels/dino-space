import React, { Component } from 'react'

const AstroContext = React.createContext()

class AstroProvider extends Component {
    constructor(){
        super()
        this.state = {
            astroCount: []
        }
    }

    render(){
        return (
            <div>

            </div>
        )
    }

}

export default AstroProvider