import React from 'react'
import { Link } from 'react-router-dom'



const GameOver = () => {
    return (
        <div className="gameover-container">
            {/* <div className="title"></div> */}
            <div className="gameOver-title"></div>

            <button className="play-again">
                <Link to="/pages/game" className="playAgainText" >PLAY AGAIN</Link>
            </button>


            <div class="fade"></div>

            <section class="star-wars">
            <div class="crawl">
                {/* <div class="title">
                
                </div> */}
                
                <p>You tried...</p>
                <br></br>
                <p></p>

                <p>Try again to save the people of Earth, end the tyranny of Astroids and restore freedom to the galaxy….</p>
            </div>
            </section>
        </div>
    )
}

export default GameOver