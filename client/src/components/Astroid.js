import React, { Component } from 'react'



class Astroid extends Component {
    constructor(props){
        super(props)
        this.state = {
            astroidX: props.astroidX,
            astroidY: props.astroidY,
            isAstroidMoving: true
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
        console.log(' P x is : ' + this.props.playerX)
        // console.log(' P y is : ' + this.state.playerY)
        if (this.state.astroidY < this.props.playerY +15 && this.state.astroidY > this.props.playerY -15) { 
            if(this.state.astroidX < this.props.playerX +75 && this.state.astroidX > this.props.playerX -75){
                console.log('COLLISION -----------------------------------')
                this.setState({
                    isAstroidMoving: false
                    
                })
                alert('Game over')
            }
        }
    }




    render(){
        this.state.isAstroidMoving ?  this.moveAstroid(): console.log(this.state.isAstroidMoving)
        return (
            <div className="astroid" style={{ top: this.state.astroidY + "px", left: this.state.astroidX + "px"}}></div>
        )
    }

}


export default Astroid