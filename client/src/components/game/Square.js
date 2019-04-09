import React, { Component } from 'react'
import Astroid from './Astroid'
import { withAstros } from '../AstroProvider.js'
// import GameBoard from './GameBoard';

const Square = (props) => {

    const {
        highscore,
        usersArr,
        endGameMsg,
        playerX,
        playerY,
        playerA,
        playerB,
        astroids,
        destroyedAstros,
        speed,
        astrosCounted,
        isFlipped,
        astroidNumber,
        isPaused } = props

    return (
        <div className="game-page">

            {/* {isPaused
                ?
                <div className="paused" ></div>
                :
                <div className="paused none"></div>
                } */}

            <div className="astro-count">
                Astroids Destroyed: {destroyedAstros}
            </div>
            <div className="high-score">HIGH SCORE = {highscore}</div>


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
                    {...props.rProps}
                    speed={speed}
                    astroidNumber={a}
                    collisionOccured={props.collisionOccured}
                    astroidX={Math.floor(Math.random() * 400)}
                    astroidY={Math.floor(Math.random() * 200)}
                    playerX={playerX}
                    playerY={playerY}
                />)}
            </div>
        </div>

    )
}





export default withAstros(Square)