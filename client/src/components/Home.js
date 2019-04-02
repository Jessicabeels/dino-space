import React from 'react'
import { Link } from 'react-router-dom'
import Intro from './Intro'

const Home = (props) => {
    return (
        <div>
            HOME HOME HOME HOME



            <button className="next-intro">
                <Link to="/intro" component={Intro}>NEXT</Link>
            </button>
        </div>
    )
}

export default Home