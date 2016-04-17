import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Menu extends Component {
    render() {
        return (
            <ul class="nav navbar-nav">
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/">New game</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/">Courses</Link></li>
            </ul>
        )
    }
}
