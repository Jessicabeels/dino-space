import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import Square from '../game/Square'
// import GameInfo from '../game/GameInfo.js'
import { withAstros } from '../../components/AstroProvider'

class Game extends Component {
    componentDidMount(){
        this.props.getHighScores()
    }
    
    render(){
        return (
            <div className="game-container">
                
            

                {/* <div className="game-title"></div> */}
            
                <div className="stay-game">
                    
                    <Square rProps={this.props} />
                </div>

                
                {/* <button className="gameover-next">
                    <Link to="/pages/gameover" >NEXT</Link>
                </button> */}

                {/* <div className="instructions">
                    <div className="instructions-img"></div>
                    <div className="instructions-text">Use ARROW KEYS to stop ASTROIDS before they EARTH</div>
                    <div className="instructions-text">Press Space to Pause</div>
                    <div className="instructions-text">Press Enter to unpause</div>

                    <div className="astroCount">{props.astrosDestroyed}</div>
                </div> */}
                
                
            </div>
        )
    }
}

export default withAstros(Game)