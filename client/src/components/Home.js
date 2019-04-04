import React from 'react'
import { Link } from 'react-router-dom'
import Intro from './Intro'

const Home = (props) => {
    return (
        <div className="home-container">
            HOME HOME HOME HOME


            <div className="astroid-home"></div>
            <div className="home-text"></div>
            <button className="next-intro">
                <Link to="/intro" component={Intro}>NEXT</Link>
            </button>
        </div>
    )
}

export default Home