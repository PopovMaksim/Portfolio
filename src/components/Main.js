import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Portfolio from '../pages/Portfolio';
  
export default class Main extends Component {
    render() {
        return (
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contacts" component={Contacts} />
                    </Switch>
                </Router> 
            </main>
        )
    }
}