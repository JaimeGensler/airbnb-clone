import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeForm from './HomeForm';

export default function Home() {
    return (
        <div>
            <h1> Welcome to AirBnB </h1>
            <HomeForm />
        </div>
    );
}
