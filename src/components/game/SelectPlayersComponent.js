import React, { Component } from 'react'

import PlayersStore from '../../stores/PlayersStore';
import PlayerSelectionList from './PlayerSelectionList';


export default class SelectPlayersComponent extends Component {
    constructor() {
        super();
        this.state = {
            players: PlayersStore.getAll().map((p) => {
                return _.extend(p, {selected: false});
            })
        };
    }

    playerChanged(i) {
        var p = this.state.players[i];
        p.selected = !p.selected;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <h1>Select players</h1>
                <PlayerSelectionList
                    players={this.state.players}
                    onPlayerSelected={this.playerChanged.bind(this)}/>
                <button class="btn btn-success" onClick={this.props.onPlayersSelected.bind(this, this.state.players)}>Continue</button>
            </div>
        )
    }
}
