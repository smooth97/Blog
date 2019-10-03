import React from 'react';
import Posts from './Posts';
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";

const Home = () => {

    return (
        <main>
            <h1>POST</h1>
            <Posts/>
            <Link to="/new">
                <MdAdd/>
            </Link>
        </main>
    )
}

export default Home;