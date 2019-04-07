import React from 'react'
import { Link } from 'react-router-dom'


const Prepare = () => {
    return (
        <div className="prepare-container">
            <div className="prep-title"></div>

            
                <div className="instructions-img"></div>
                <div className="instructions-text">
                    HOW TO PLAY
                </div>

            <button className="game-next">
                <Link to='/pages/game'>NEXT</Link>
            </button>
        </div>
    )
}


export default Prepare

