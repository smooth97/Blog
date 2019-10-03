import React from 'react';
import { Link } from 'react-router-dom'
import { MdPerson } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

const Nav = () => {

    return (
        <nav>
            <div className="navContainer">
                <Link to="/">
                    <h1>SMOOTH</h1>
                </Link>
                <div className="icons">
                    <MdPerson className="icon"/>
                    <GoMarkGithub className="icon"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;