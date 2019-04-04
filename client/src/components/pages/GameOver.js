import React from 'react'
import { Link } from 'react-router-dom'


const GameOver = () => {
    return (
        <div className="gameover-container">
            <div className="title"></div>
            <div className="gameOver-title"></div>

            <button>
                <Link to="/pages/game" className="play-again">PLAY AGAIN</Link>
            </button>


            <div class="fade"></div>

            <section class="star-wars">
            <div class="crawl">
                {/* <div class="title">
                
                </div> */}
                
                <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>
                
                <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>

                <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….</p>
            </div>
            </section>
        </div>
    )
}

export default GameOver