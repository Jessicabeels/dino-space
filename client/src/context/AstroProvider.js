import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


const AstroContext = React.createContext()

class AstroProvider extends Component {
    constructor(){
        super()
        this.state = {
            playerX: 300,
            playerY: 500,
            playerA: 100,
            playerB: 250,
            astroids: [],
            destroyedAstros: [],
            speed: 1
            // isAstroidMoving: true
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
            this.setState(prevState => ({playerX: prevState.playerX > 0 ? prevState.playerX -15  : prevState.playerX }))
        } else if(e.which === 39){
            console.log('39 = right')
            this.setState(prevState => ({ playerX: prevState.playerX < 400 ? prevState.playerX + 15 : prevState.playerX }))
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
            destroyedAstros: [...prevState.destroyedAstros, astroidNum]
            
        }), () => {
            if(!this.state.astroids.length){
                this.levelUp()
            }
        })
        
        // REceive which astroid had the collison
        // Remove number representing astroid from arr in state
    }

   astroCount = () => {
       let astrosCounted = 0
       if(this.destroyedAstros){
            astrosCounted ++
       }
   }


    levelUp = ()=> {
        this.setState(p => ({astroids: p.destroyedAstros.map(a => a + 5), destroyedAstros: [], speed: p.speed + 1}))
        
    }


   render(){
       
    // console.log("the destroyed ASTROS" + this.destroyedAstros)
    
       return (
       <AstroContext.Provider
            value={{
                ...this.state,
                
            }}>

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