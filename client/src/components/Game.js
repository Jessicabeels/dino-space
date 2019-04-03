import React from 'react'
import { Link } from 'react-router-dom'
import Square from './Square'


const Game = () => {
    return (
        <div className="game-container">
            GAME GAME GAME GAME GAME
            <button>

                <Link to="/gameover" className="gameover-next">NEXT</Link>
            </button>
        
            <div className="stay-game">
                <Square />
            </div>
            
        </div>
    )
}

export default Game 