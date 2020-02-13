import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import Home from './Home';
import Host from './Host';
import Language from './Language';
import Currency from './Currency';
import BecomeHost from './BecomeHost';
import Help from './Help';
import Signup from './Signup';
import Login from './Login';

import bg from '../bg.jpg';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hostanexperience" component={Host} />
                    <Route exact path="/language" component={Language} />
                    <Route exact path="/currency" component={Currency} />
                    <Route exact path="/becomeahost" component={BecomeHost} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}
