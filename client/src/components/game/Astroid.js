import React, { Component } from 'react'
import { withAstros } from '../AstroProvider'

class Astroid extends Component {
    constructor(props){
        super(props)
        this.state = {
            astroidX: this.props.astroidX,
            astroidY: this.props.astroidY,
            isAstroidMoving: true,
            postNewScores: this.props.postNewScores
        
        }
        this.level1 = null
    }

    moveAstroid = e => {
        if (this.state.astroidY < 550){
            if(!this.level1){
                console.log("vl 1 strt")
                this.level1 = setInterval(() => {this.setState(prevState => ({ astroidY: prevState.astroidY + this.props.speed }))}, 60)
            }
        } else {
            this.setState({astroidY: 100})
        }
        this.checkCollision()
    
        
    }

    checkCollision = () => {
        // console.log(' A x is : ' + this.state.astroidX)
        // console.log(' A y is : ' + this.state.astroidY)
        // console.log(' P x is : ' + this.props.playerX)
        // console.log(' P y is : ' + this.state.playerY)
        if (this.state.astroidY < this.props.playerY +20 && this.state.astroidY > this.props.playerY -20) { 
            if(this.state.astroidX < this.props.playerX +75 && this.state.astroidX > this.props.playerX -75){
                console.log('COLLISION -----------------------------------')
                this.setState({
                    isAstroidMoving: false
                    
                }) 
                this.props.collisionOccured(this.props.astroidNumber)
            }
        }
        this.checkImpactEarth()
        
    }

    

    checkImpactEarth = () => {
        // console.log(this.props.history)
        if(this.state.astroidY >= 530 ){
            console.log(' end the game Astroids Y is : ' + this.state.astroidY)
            // alert('game over')
            setTimeout(() => {
                this.props.postNewScores() 
                this.props.history.push("/pages/gameover")
            }, 200)
            
           
        
        
        }
        
    }





    componentDidMount(){
        if(this.state.isAstroidMoving){
            this.moveAstroid()
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.isAstroidMoving){
  
            this.moveAstroid()
        }
    }




    render(){
        return (
            <div className="astroid" style={{ top: this.state.astroidY + "px", left: this.state.astroidX + "px"}}></div>
        )
    }

}


export default withAstros(Astroid)


