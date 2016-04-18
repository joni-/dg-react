import React, { Component } from 'react';

import PlayersStore from '../stores/PlayersStore';
import * as PlayersActions from '../actions/PlayersActions'


export default class PlayersComponent extends Component {
    constructor() {
        super();
        this.onPlayersChange = this.onPlayersChange.bind(this);
        this.state = {
            newPlayerName: '',
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

    playerNameChanged(e) {
        this.setState({
            newPlayerName: e.target.value
        });
    }

    addNewPlayer() {
        PlayersActions.createPlayer(this.state.newPlayerName);
        this.setState({
            newPlayerName: ''
        });
    }

    deletePlayer(p) {
        PlayersActions.deletePlayer(p.id);
    }

    render() {
        const playerList = this.state.players.map((p) => {
            return <li key={p.id}>{p.name} <button onClick={this.deletePlayer.bind(this, p)}>X</button></li>;
        });
        return (
            <div>
                <h1>Players</h1>
                <ul>
                    {playerList}
                </ul>
                <input value={this.state.newPlayerName} onChange={this.playerNameChanged.bind(this)} />
                <button onClick={this.addNewPlayer.bind(this)}>Add</button>
            </div>
        )
    }
}
