import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import './styles.css';

import Container from '../container';
import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Contact from '../contact';

class App extends Component {
    render() {
        return (
            <div className="mdl-layout__container has-scrolling-header">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-tabs is-upgraded">
                    <Header/>
                    <Container>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/signup" component={Signup}/>
                    </Container>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
