import React, { Component } from 'react'


class Square extends Component {
    constructor(){
        super()
        this.state = {
            playerX: 300,
            playerY: 500,
            playerA: 100,
            playerB: 250,
            astroidY: 100,
            astroidX: 100,
            isAstroidMoving: true
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", this.movePlayer)
        // this.moveAstroid()
    }

    componentWillUnmount(){
        window.addEventListener("keydown", this.movePlayer)
    }

    movePlayer = e => {
        // console.log(e.which)
        // if(e.which === 37){
        //     console.log('37 = left')
        //     this.setState(prevState => ({playerX: prevState.playerX > 0 ? prevState.playerX - 15 : prevState.playerX}))
        // } else if(e.which === 39){
        //     console.log('39 = right')
        //     this.setState(prevState => ({ playerX: prevState.playerX < 371 ? prevState.playerX + 15 : prevState.playerX}))
        // } else if(e.which === 38){
        //     console.log('38 = top')
        //     this.setState(prevState => ({playerA: prevState.playerA > 0 ? prevState.playerA - 15 : prevState.playerA }))
        // } else if(e.which === 40){
        //     console.log('40 = bottom')
        //     this.setState(prevState => ({ playerA: prevState.playerA < 371 ? prevState.playerA + 15 : prevState.playerA}))
        // }
        if(e.which === 37){
            console.log('37 = left')
            this.setState(prevState => ({playerX: prevState.playerX -15  }))
        } else if(e.which === 39){
            console.log('39 = right')
            this.setState(prevState => ({ playerX: prevState.playerX + 15 }))
        } else if(e.which === 38){
            console.log('38 = top')
            this.setState(prevState => ({playerY: prevState.playerY -15   }))
        } else if(e.which === 40){
            console.log('40 = bottom')
            this.setState(prevState => ({ playerY: prevState.playerY + 15 }))
        }
    }

    moveAstroid = e => {
        if (this.state.astroidY < 550){
            setTimeout(() => {this.setState(prevState => ({ astroidY: prevState.astroidY + 1 }))}, 100)
        } else {
            this.setState({astroidY: 100})
        }
        this.checkCollision()
        
    }

    checkCollision = () => {
        console.log(' A x is : ' + this.state.astroidX)
        // console.log(' A y is : ' + this.state.astroidY)
        console.log(' P x is : ' + this.state.playerX)
        // console.log(' P y is : ' + this.state.playerY)
        if (this.state.astroidY < this.state.playerY +15 && this.state.astroidY > this.state.playerY -15) { 
            if(this.state.astroidX < this.state.playerX +75 && this.state.astroidX > this.state.playerX -75){
                console.log('COLLISION -----------------------------------')
                this.setState({
                    isAstroidMoving: false
                })
            }
        }
    }




   render(){
    // this.moveAstroid()
    this.state.isAstroidMoving ?  this.moveAstroid(): console.log(this.state.isAstroidMoving)
    //console.log(this.state.astroidY) 
       return (
           
           <div className="game-board">
                {/* <div className="player" style={{ top: this.state.playerA + "px", left: this.state.playerX + "px", bottom: this.state.playerB + "px", right: this.state.playerX + "px"}}></div> */}
                <div className="player" style={{ top: this.state.playerY + "px", left: this.state.playerX + "px" }}></div>
                <div className="astroid" style={{ top: this.state.astroidY + "px", left: this.state.astroidX + "px"}}></div>
                
           </div>
       )
   }
    


}

export default Square