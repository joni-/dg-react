import React, { Component } from 'react'
import { Link } from 'react-router';

import Menu from './menu/Menu'


export default class Layout extends Component {
    render() {
        return (
            <div id="layout">
                {this.props.children}
                <Link to="/">Back to menu</Link>
            </div>
        )
    }
}
