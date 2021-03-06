import React from 'react'
import { Link } from 'react-router-dom'
import Game from './Game'


const Home = (props) => {
    return (
        <div className="home-container">

            <div className="astroid-home"></div>
            <div class="fade"></div>

            <section class="star-wars">
                <div class="crawl">
                    <p>Millions of years ago, the dinos had their peaceful existence interrupted by a fiery meteorite that devestated the planet and left no survivors.</p>
                    <br></br>
                    <p>Or did it?</p>
                    <br></br>

                    <p>Now, in their new home (Outer Space), these few brave dinos act as protectors of the earth from any more attacks from astroids.</p>
                    <br></br>
                    <p> Play as Donny the Dino and help stop the astroids attacks to protect planet earth!</p>
                </div>
            </section>

            <button className="next-intro">
                <Link to="/pages/game" component={Game}>NEXT</Link>
            </button>
        </div>
    )
}

export default Home