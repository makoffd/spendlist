import React, { Component } from 'react';
import { Route } from 'react-router';

import { history } from '../../store';

import PrivateRoute from '../private-route';
import Container from '../container';
import Header from '../header';
import Footer from '../footer';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Contact from '../contact';
import Expenses from '../expenses';
import Notifications from '../notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux';


class App extends Component {
    static defaultProps = {
        requestExpenses: () => {}
    }

    componentDidMount() {
        if (this.props.user && this.props.expenses.length === 0) {
            this.props.requestExpenses()
        }
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <div className="mdl-layout__container has-scrolling-header">
                        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-tabs is-upgraded">
                            <Notifications />
                            <Header/>
                            <Container>
                                <Route exact path="/" component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/signup" component={Signup}/>
                                <PrivateRoute path="/expenses" component={Expenses}/>
                            </Container>
                            <Footer/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </ConnectedRouter>
        );
    }
}

export default App;
