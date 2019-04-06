import React from 'react'


class GameInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            astroCount: this.props.astroCount + 1,
            timeCount: '',
            level: '',
            isAstroidMoving: ''
        }
    }

    

    // getAstroidCount = () => {
    //     if(!astroCount || astroCount < 0){
    //         count = 0
    //     } else if(astroCount <= 1 ){
    //         astroCount ++
    //     }
    // }


    // getLevelCount = () => {
    //     if(timeCount < 3000){
    //         this.props.level = level1
    //     } else if( timeCount > 30000
    //         //time is greater than 30 seconds 
    //     ){
    //         this.props.level ++
    //         //reset state, reset astroids
    //     }
    // }

//in square <Counter count{this.state.count}/>


    render(){
        return (
            <div>
                {/* {this.props.count}
                {this.props.level} */}
                SCORE
            </div>
        )
    }









}

export default GameInfo