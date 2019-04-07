import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


const AstroContext = React.createContext()

class AstroProvider extends Component {
    constructor(){
        super()
        this.state = {
            score: JSON.parse(localStorage.getItem('highscore')) || {},
            highscore: 0
        }

    }


    saveScores = () => {
        if(highscore !== null){
            if (score > highscore) {
                localStorage.setItem("highscore", score);      
            }
        }
        else{
            localStorage.setItem("highscore", score);
        }
    }

    render(){
        return (
            <div>

            </div>
        )
    }

}

export default withRouter(AstroProvider)


export const withAstros = C => props => (
    <AstroContext.Consumer>
        {value => <C {...props} {...value}/>}
    </AstroContext.Consumer>
)