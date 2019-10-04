import React from 'react';
import Posts from './Posts';
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";

const Home = () => {

    return (
        <main>
            <div className="homeContainer">
                <h1>POST</h1>
                <Link to="/new" className="new">
                    <MdAdd/>
                </Link>
            </div>
            <Posts/>
        </main>
    )
}

export default Home;