import React from 'react'
import { Link } from 'react-router-dom'


const Game = () => {
    return (
        <div className="game-container">
            GAME GAME GAME GAME GAME
            <button>

                <Link to="/gameover" className="gameover-next">NEXT</Link>
            </button>
            <div className="game-board"></div>
        </div>
    )
}

export default Game 