import React from 'react'
import { Link } from 'react-router-dom'

import Prepare from './Prepare';

const Home = (props) => {
    return (
        <div className="home-container">
            <div className="title"></div>


            <div className="astroid-home"></div>
            <div className="home-text"></div>
            <button className="next-intro">
                <Link to="/pages/prepare" component={Prepare}>NEXT</Link>
            </button>
        </div>
    )
}

export default Home