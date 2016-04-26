import React, { Component } from 'react';

import PlayersStore from '../stores/PlayersStore';
import * as PlayersActions from '../actions/PlayersActions'
import PlayersListComponent from './players/PlayersListComponent';
import AddPlayerComponent from './players/AddPlayerComponent';


export default class PlayersComponent extends Component {
    constructor() {
        super();
        this.onPlayersChange = this.onPlayersChange.bind(this);
        this.state = {
            players: PlayersStore.getAll()
        };
    }

    onPlayersChange() {
        this.setState({
            players: PlayersStore.getAll()
        });
    }

    componentWillMount() {
        PlayersStore.addChangeListener(this.onPlayersChange);
    }

    componentWillUnmount() {
        PlayersStore.removeChangeListener(this.onPlayersChange);
    }

    addNewPlayer(name) {
        PlayersActions.createPlayer(name);
    }

    deletePlayer(p) {
        PlayersActions.deletePlayer(p.id);
    }

    render() {
        return (
            <div>
                <h1>Players</h1>
                <PlayersListComponent players={this.state.players} onPlayerDeleted={this.deletePlayer.bind(this)} />
                <AddPlayerComponent onNewPlayerAdded={this.addNewPlayer.bind(this)} />
            </div>
        )
    }
}
