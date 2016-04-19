import React, { Component } from 'react'

import SelectPlayersComponent from './game/SelectPlayersComponent';


export default class GameComponent extends Component {
    playersSelected(players) {
        console.log(players);
    }

    render() {
        return (
            <div>
                <SelectPlayersComponent onPlayersSelected={this.playersSelected.bind(this)} />
            </div>
        )
    }
}
