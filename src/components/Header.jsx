import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header() {
    const headerStyles = {
        height: '6vh',
        minHeight: '3rem',
        padding: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    };
    const navStyles = {
        float: 'right',

        height: '100%',
        width: '40%'
    };
    const listStyles = {
        float: 'right',
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',

        margin: '0',
        padding: '0',

        height: '100%',
        width: '100%',

        listStyleType: 'none',
        fontSize: '1.1vh'
    };
    const listItemStyle = {};
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const centerImage = {
        padding: '1rem',
        height: '100%',
        float: 'left'
    };
    return (
        <Router>
            <div style={headerStyles}>
                <div style={centerImage}>
                    <Link to="/">
                        <img
                            style={{ height: '100%' }}
                            src="logo.png"
                            alt="AirBnBImage"
                        />
                    </Link>
                </div>
                <nav style={navStyles}>
                    <ul style={listStyles}>
                        <li style={listItemStyle}>
                            <Link to="/language" style={linkStyle}>
                                English (US)
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/currency" style={linkStyle}>
                                $ USD
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Host a home
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/hostanexperience" style={linkStyle}>
                                Host an experience
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/help" style={linkStyle}>
                                Help
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/signup" style={linkStyle}>
                                Sign up
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/login" style={linkStyle}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}
