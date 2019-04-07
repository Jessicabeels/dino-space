import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../game/Square'
// import GameInfo from '../game/GameInfo.js'


const Game = (props) => {
    return (
        <div className="game-container">
            
           

            <div className="game-title"></div>
        
            <div className="stay-game">
                <Square rProps={props} />
            </div>

            
            {/* <button className="gameover-next">
                <Link to="/pages/gameover" >NEXT</Link>
            </button> */}

            <div className="instructions">
                <div className="instructions-img"></div>
                <div className="instructions-text">USE ARROW KEYS TO MOVE TO CATCH ASTROIDS BEFORE THEY HIT EARTH</div>
            </div>
            
            
        </div>
    )
}

export default Game 