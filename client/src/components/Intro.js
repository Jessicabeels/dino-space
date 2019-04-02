import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div className="intro-container">

        INTRO INTRO INTRO
            <button className="prepare-next">
                <Link className = "prepare-next" to="/prepare">NEXT</Link>
                
            </button>
        </div>
    )
}

export default Intro