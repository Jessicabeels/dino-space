import React from 'react'
import { Link } from 'react-router-dom'


const GameOver = () => {
    return (
        <div className="gameover-container">
            GAME OVER GAME OVER GAME OVER

            <button>
                <Link to="/game" className="play-again">PLAY AGAIN</Link>
            </button>
        </div>
    )
}

export default GameOver