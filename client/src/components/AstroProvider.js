import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';


const AstroContext = React.createContext()

class AstroProvider extends Component {
    constructor(){
        super()
        this.state = {
            highscore: [], 
            usersArr: [],
            points: 0,
            endGameMsg: '',
            playerX: 300,
            playerY: 500,
            playerA: 100,
            playerB: 250,
            astroids: [],
            destroyedAstros: 0,
            speed: 1,
            astrosCounted: 0,
            isFlipped: false
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
                    endGameMsg: `You beat the high score`
                })
            })
        } else if(points > second ){
            Axios.put(`/scores/${_id}`, {"second": points, "third": second}).then(res => {
                this.setState({
                    highscore: res.data,
                    endGameMsg: `You are in 2nd place!`
                })
            })
        } else if(points > third){
            Axios.out(`/scores/${_id}`, {"third": points}).then(res => {
                this.setState({
                    highscore: res.data,
                    endGameMsg: `You are in 3rd place! `
                })
            })
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", this.movePlayer)
        this.setState({astroids: [1, 2, 3, 4, 5]})
        // this.moveAstroid()
    }

    componentWillUnmount(){
        window.addEventListener("keydown", this.movePlayer)
    }

    movePlayer = e => {
        if(e.which === 37){
            console.log('37 = left')
            //.addClass('switch'))???
            this.setState(prevState => 
                ({ isFlipped: false,
                    playerX: prevState.playerX > 0
                    ? prevState.playerX -15
                    : prevState.playerX }))
        } else if(e.which === 39){
            console.log('39 = right')
            this.setState(prevState => ({
                    isFlipped :true,
                    playerX: prevState.playerX < 400
                    ? prevState.playerX + 15
                    : prevState.playerX }))
        } else if(e.which === 38){
            console.log('38 = top')
            this.setState(prevState => ({playerY: prevState.playerY > 10 ? prevState.playerY -15 : prevState.playerY  }))
        } else if(e.which === 40){
            console.log('40 = bottom')
            this.setState(prevState => ({ playerY: prevState.playerY < 490 ? prevState.playerY + 15 : prevState.playerY }))
        }
    }

    //how many astroidNums are there? if collision occurred then increcemnt 

    collisionOccured = (astroidNum) => {
        console.log(astroidNum)
        
        this.setState(prevState => ({ 
            astroids: prevState.astroids.filter(a => a !== astroidNum), 
            destroyedAstros: prevState.destroyedAstros + 1
            
        }), () => this.astroCount() ) 
  
        
        
        // REceive which astroid had the collison
        // Remove number representing astroid from arr in state
    }
    

   astroCount = () => {
       console.log(this.state.astroids)
        if(this.state.destroyedAstros % 5 === 0){
                this.levelUp()
            }      
    
}
       
   


    levelUp = ()=> {
        // this.setState(p => ({astroids: p.destroyedAstros.map(a => a + 5), speed: p.speed + 1}))
        this.setState(prevState => ({ 
            astroids: [1, 2, 3, 4, 5], 
            speed: prevState.speed += .5,

            
        }) ) 
       
    }



 




    render(){
        return (
           <AstroContext.Provider value={{
               getUsers: this.getUsers,
               saveScores: this.saveScores,
               newScores: this.newScores,
               highscore: this.state.highscore, 
               usersArr: this.state.usersArr,
               collisionOccured: this.collisionOccured,
               points: this.state.points,
               endGameMsg: this.state.endGameMsg,        
               playerX: this.state.playerX,
               playerY: this.state.playerY,
               playerA: this.state.playerA,
               playerB: this.state.playerB,
               astroids: this.state.astroids,
               destroyedAstros: this.state.destroyedAstros,
               speed: this.state.speed,
               astrosCounted: this.astrosCounted,
               isFlipped: this.state.isFlipped,
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