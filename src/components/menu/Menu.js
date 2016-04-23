import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Menu extends Component {
    render() {
        return (
            <div class="menu container container-fluid">
                <div class="row">
                    <Link to="/newgame">
                        <div class="menu-item well">New game</div>
                    </Link>
                </div>
                <div class="row">
                    <Link to="/resumegame">
                        <div class="menu-item well">Resume game</div>
                    </Link>
                </div>
                <div class="row">
                    <Link to="/players">
                        <div class="menu-item well">Players</div>
                    </Link>
                </div>
                <div class="row">
                    <Link to="/courses">
                        <div class="menu-item well">Courses</div>
                    </Link>
                </div>
            </div>
        )
    }
}
