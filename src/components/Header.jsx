import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header() {
    const headerStyles = {
        height: '6vh',
        minHeight: '3rem',
        padding: '0',
        backgroundColor: 'gray'
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
    const listItemStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    return (
        <Router>
            <div style={headerStyles}>
                <Link to="/">
                    <img
                        style={{ maxHeight: '80%' }}
                        src="logo.png"
                        alt="AirBnBImage"
                    />
                </Link>
                <nav style={navStyles}>
                    <ul style={listStyles}>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                English (US)
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/help" style={linkStyle}>
                                $ USD
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Host a home
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Host an experience
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Help
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Sign up
                            </Link>
                        </li>
                        <li style={listItemStyle}>
                            <Link to="/becomeahost" style={linkStyle}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}
