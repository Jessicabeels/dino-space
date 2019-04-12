import React, { Component } from 'react'
import Astroid from './Astroid'
import { withAstros } from '../AstroProvider.js'


class Square extends Component {
    constructor(){
        super()
            this.state = {
                highscores: []
            
        }
    }
   
    render(){
        const {
           
            playerX,
            playerY,
            // playerA,
            // playerB,
            astroids,
            destroyedAstros,
            speed,
            // astrosCounted,
            isFlipped,
            // astroidNumber,
            isPaused,
            highscores } = this.props
   

        console.log(this.props)
       
    return (
        
        <div className="game-page wrapper">

            {/* {isPaused
                ?
                <div className="paused" ></div>
                :
                <div className="paused none"></div>
                } */}


            {/* <div className="instructions">
                <div className="astro-count">Astroids Destroyed: {destroyedAstros}</div>
                <div className="high-score">HIGH SCORE = {highscore}</div>
                <div className="instructions-img"></div>
                <div className="instructions-text">USE ARROW KEYS TO CATCH ASTROIDS BEFORE THEY HIT EARTH</div>
                <div className="instructions-text">Press Space to Pause</div>
                <div className="instructions-text">Press Enter to unpause</div>
                <div className="astroCount">{props.astrosDestroyed}</div>
            </div> */}
            
        
                
            
                <div class="sidebar">
                    <div className="astro-count">Astroids Destroyed: {destroyedAstros}</div>
                    {/* {highscores.map(score => 
                        <h1>        </h1>
                    )} */}

                    <div className="highscore">
                        Highscores
                        {highscores.length < 1 ? <div> Loading </div> : 
                            <div>
                                'First:' {highscores[0].first}
                                'Second:' {highscores[0].second}
                                'Third:' {highscores[0].third}
                            </div>
                        }
                    </div>
                    
                    <div className="instructions-img"></div>
                    <div className="instructions-text">Use arrow keys to stop astroids before they hit Earth</div>
                    <div className="instructions-text">Space = Pause<br></br>Enter = unpause</div>
                    
                </div>
            


            <div className="game-board">
                {isPaused
                    ?
                    <div className="paused" ></div>
                    :
                    <div className="paused none"></div>
                }
                {isFlipped
                    ?
                    <div className="player player-flipped" style={{ top: playerY + "px", left: playerX + "px" }}></div>
                    :
                    <div className="player" style={{ top: playerY + "px", left: playerX + "px" }}></div>
                }




                {astroids.map(a => <Astroid key={a}
                    {...this.props.rProps}
                    speed={speed}
                    astroidNumber={a}
                    collisionOccured={this.props.collisionOccured}
                    astroidX={Math.floor(Math.random() * 400)}
                    astroidY={Math.floor(Math.random() * 200)}
                    playerX={playerX}
                    playerY={playerY}
                />)}
            </div>
        </div>

    )
}

}




export default withAstros(Square)