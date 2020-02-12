import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import Home from './Home';
import bg from '../bg.jpg';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}
