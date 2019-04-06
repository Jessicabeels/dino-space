import React, { Component } from 'react'
import Astroid from './Astroid'

class Square extends Component {
    constructor(){
        super()
        this.state = {
            playerX: 300,
            playerY: 500,
            playerA: 100,
            playerB: 250
            // isAstroidMoving: true
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

    moveAstroid = e => {
        if (this.state.astroidY < 550){
            setTimeout(() => {this.setState(prevState => ({ astroidY: prevState.astroidY + 1 }))}, 100)
        } else {
            this.setState({astroidY: 100})
        }
        this.checkCollision()
        
    }






   render(){
       return (
           
           <div className="game-board">
                <div className="player" style={{ top: this.state.playerY + "px", left: this.state.playerX + "px" }}></div>
                <Astroid astroidX={100} astroidY={150} {...this.state}/>
                <Astroid astroidX={250} astroidY={100} {...this.state}/>
                <Astroid astroidX={400} astroidY={150} {...this.state}/>
            
        
           </div>
       )
   }
    


}

export default Square


























// import React, { Component } from 'react'
// import Astroid from './Astroid'

// class Square extends Component {
//     constructor(){
//         super()
//         this.state = {
//             playerX: 300,
//             playerY: 500,
//             playerA: 100,
//             playerB: 250,
//             astroids: [1,2,3,4]
//             // isAstroidMoving: true
//         }

//     }

//     componentDidMount(){
//         window.addEventListener("keydown", this.movePlayer)
//         // this.moveAstroid()
//     }

//     componentWillUnmount(){
//         window.addEventListener("keydown", this.movePlayer)
//     }

//     movePlayer = e => {
//         if(e.which === 37){
//             console.log('37 = left')
//             this.setState(prevState => ({playerX: prevState.playerX > 0 ? prevState.playerX -15  : prevState.playerX }))
//         } else if(e.which === 39){
//             console.log('39 = right')
//             this.setState(prevState => ({ playerX: prevState.playerX < 400 ? prevState.playerX + 15 : prevState.playerX }))
//         } else if(e.which === 38){
//             console.log('38 = top')
//             this.setState(prevState => ({playerY: prevState.playerY > 10 ? prevState.playerY -15 : prevState.playerY  }))
//         } else if(e.which === 40){
//             console.log('40 = bottom')
//             this.setState(prevState => ({ playerY: prevState.playerY < 490 ? prevState.playerY + 15 : prevState.playerY }))
//         }
//     }

//     // moveAstroid = e => {
//     //     if (this.state.astroidY < 550){
//     //         setTimeout(() => {this.setState(prevState => ({ astroidY: prevState.astroidY + 1 }))}, 100)
//     //     } else {
//     //         this.setState({astroidY: 100})
//     //     }
//     //     this.checkCollision()
        
//     // }


//     levelUp = ()=> {
        
//     }



//    render(){
//        return (
           
//            <div className="game-board">
//                 <div className="player" style={{ top: this.state.playerY + "px", left: this.state.playerX + "px" }}></div>
//                 {/* <Astroid astroidX={100} astroidY={150} {...this.state}/>
//                 <Astroid astroidX={250} astroidY={100} {...this.state}/>
//                 <Astroid astroidX={400} astroidY={150} {...this.state}/> */}
            
//                 {this.state.astroids.map(a => <Astroid key={a} astroidX={Math.floor(Math.random() * 400)} astroidY={100}/>)}
//            </div>
//        )
//    }
    


// }

// export default Square