import React, { Component } from 'react'


export default class Menu extends Component {
    render() {
        return (
            <ul class="nav navbar-nav">
                <li><a href="#">New game</a></li>
                <li><a href="#">Players</a></li>
                <li><a href="#">Courses</a></li>
            </ul>
        )
    }
}
