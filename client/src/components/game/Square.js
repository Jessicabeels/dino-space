import React, { Component } from 'react'
import Astroid from './Astroid'

class Square extends Component {
    constructor(){
        super()
        this.state = {
            playerX: 300,
            playerY: 500,
            playerA: 100,
            playerB: 250,
            astroids: [],
            destroyedAstros: 0,
            speed: 1,
            astrosCounted: 0
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
            //.addClass('switch'))???
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
            destroyedAstros: prevState.destroyedAstros += 1
            
        }), () => this.astroCount() ) 
        // {
        //     console.log(this.state.destroyedAstros)
        //     if(!this.state.astroids.length){
        //         this.levelUp()
        //     }
        
        
        // REceive which astroid had the collison
        // Remove number representing astroid from arr in state
    }
    

   astroCount = () => {
       console.log(this.state.astroids)
        if(this.state.destroyedAstros % 5 === 0){
                this.levelUp()
            }
    // if(this.destroyedAstros > 0){
    //     this.setState(p => ({
    //          astrosCounted: p.astroCount ++
    //     }))        
    
}
       
   


    levelUp = ()=> {
        // this.setState(p => ({astroids: p.destroyedAstros.map(a => a + 5), speed: p.speed + 1}))
        this.setState(prevState => ({ 
            astroids: [1, 2, 3, 4, 5], 
            speed: prevState.speed += .5
            
        }) ) 
       
    }



 


   render(){
       
   console.log(this.props)
    
       return (
        <div className="game-page"> 
           
            <div className="astro-count">
                Astroids Destroyed: {this.state.destroyedAstros}
            </div>
            {/* <div className="high-score">HIGH SCORE = {this.state.destroyedAstros}</div> */}
            
           
           <div className="game-board">
                <div className="player" style={{ top: this.state.playerY + "px", left: this.state.playerX + "px" }}></div>
            
                {this.state.astroids.map(a => <Astroid key={a}
                                                 speed={this.state.speed}
                                                 astroidNumber={a}
                                                 collisionOccured={this.collisionOccured}
                                                 astroidX={Math.floor(Math.random() * 400)}
                                                 astroidY={Math.floor(Math.random() * 200)}
                                                 {...this.state}
                                                 rProps={this.props}/>)}
           </div>
        </div>
           
       )
   }
    


}

export default Square