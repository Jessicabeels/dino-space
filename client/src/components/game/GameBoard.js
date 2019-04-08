import React from 'react'
import { withAstros } from '../AstroProvider'
import Astroid from './Astroid'

const GameBoard = (props) => {
    
const { speed, collisionOccured } = props

    // const mappedAstros = props.astroids.map(a => <Astroid key={a}
    //     speed={speed}
    //     astroidNumber={a}
    //     collisionOccured={collisionOccured}
    //     astroidX={Math.floor(Math.random() * 400)}
    //     astroidY={Math.floor(Math.random() * 200)}
    //     {...this.state}
    //     rProps={this.props}/>)

    return (
        <div>
            {/* {mappedAstros} */}
        </div>
    )


}

export default withAstros(GameBoard)