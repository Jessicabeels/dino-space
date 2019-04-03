import React, { Component } from 'react'


class Square extends Component {
    constructor(){
        super()
        this.state = {
            playerX: 100,
            playerY: 250,
            playerA: 100,
            playerB: 250
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", this.movePlayer)
    }

    componentWillUnmount(){
        window.addEventListener("keydown", this.movePlayer)
    }

    movePlayer = e => {
        // console.log(e.which)
        if(e.which === 37){
            console.log('37 = left')
            this.setState(prevState => ({playerX: prevState.playerX > 0 ? prevState.playerX - 15 : prevState.playerX}))
        } else if(e.which === 39){
            console.log('39 = right')
            this.setState(prevState => ({ playerX: prevState.playerX < 371 ? prevState.playerX + 15 : prevState.playerX}))
        } else if(e.which === 38){
            console.log('38 = top')
            this.setState(prevState => ({playerA: prevState.playerA > 0 ? prevState.playerA - 15 : prevState.playerA }))
        } else if(e.which === 40){
            console.log('40 = bottom')
            this.setState(prevState => ({ playerA: prevState.playerA < 371 ? prevState.playerA + 15 : prevState.playerA}))
        }
    }


   render(){
       return (
           <div className="game-board">
                <div className="player" style={{ top: this.state.playerA + "px", left: this.state.playerX + "px", bottom: this.state.playerB + "px", right: this.state.playerX + "px"}}></div>
           </div>
       )
   }
    


}

export default Square