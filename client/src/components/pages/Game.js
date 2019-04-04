import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../game/Square'


const Game = () => {
    return (
        <div className="game-container">
            
           

            <div className="title"></div>
        
            <div className="stay-game">
                <Square />
            </div>
            <button>
                <Link to="/pages/gameover" className="gameover-next">NEXT</Link>
            </button>
            
        </div>
    )
}

export default Game 