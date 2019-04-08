import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';


const AstroContext = React.createContext()

class AstroProvider extends Component {
    constructor(){
        super()
        this.state = {
            // score: JSON.parse(localStorage.getItem('highscore')) || {},
            highscore: [], 
            usersArr: []
        }

    }

    getUsers = () => {
        Axios.get("/users").then(res => {
            this.setState({usersArr: res.data})
        })
    }


    saveScores = () => {
      Axios.get('/users').then(res => {
          this.setState({highscore: res.data})
      })
    }

    newScores = () => {
        let{first, second, third, _id} = this.state.highscore[0]
        let {points} = this.state
        if(points > first){
            Axios.put(`scores.${_id}`, {first: points, "second": first, "third": second}).then(res => {
                this.setState({
                    highscore: res.data,
                    end
                })
            })
        }
    }

    render(){
        return (
           <AstroContext.Provider value={{
               getUsers: this.getUsers,
               saveScores: this.saveScores,
               ...this.state
           }}>
                {this.props.children}
           </AstroContext.Provider>
        )
    }

}

export default withRouter(AstroProvider)


export const withAstros = C => props => (
    <AstroContext.Consumer>
        {value => <C {...props} {...value}/>}
    </AstroContext.Consumer>
)