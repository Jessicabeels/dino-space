import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../game/Square'
// import GameInfo from '../game/GameInfo.js'


const Game = () => {
    return (
        <div className="game-container">
            
           

            <div className="game-title"></div>
        
            <div className="stay-game">
                <Square />
            </div>

            
            <button className="gameover-next">
                <Link to="/pages/gameover" >NEXT</Link>
            </button>
            

            {/* <GameInfo/> */}
            
        </div>
    )
}

export default Game 