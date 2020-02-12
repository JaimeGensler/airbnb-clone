import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch></Switch>
            </div>
        </Router>
    );
}
