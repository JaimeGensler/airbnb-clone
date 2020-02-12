import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HomeForm() {
    var formBorder = {
        border: '2px solid',
        width: '500px',
        height: '600px',
        fontSize: '20px',
        fontVariant: 'small-caps'
    };
    return (
        <div>
            <h2> Book unique places to stay and things to do. </h2>
            <form style={formBorder}>
                <div>
                    <label>
                        where would you like to go?
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        check-in
                        <input type="text" name="name" />
                    </label>
                    <label>
                        check-out
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        number of guests <input type="number" name="name" />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
