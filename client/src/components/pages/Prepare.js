import React from 'react'
import { Link } from 'react-router-dom'


const Prepare = () => {
    return (
        <div className="prepare-container">
                <div className="title"></div>
                <button>
                    <Link className="game-next" to='/pages/game'>NEXT</Link>
                </button>
        </div>
    )
}


export default Prepare

