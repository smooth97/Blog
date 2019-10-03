import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import New from './New';

const Layout = () => {

    return (
        <div>
            <Nav/>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/new" component={New}/>
        </div>
    )
}

export default Layout;