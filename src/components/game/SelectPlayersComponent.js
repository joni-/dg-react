import React, { Component } from 'react'

import PlayersStore from '../../stores/PlayersStore';
import CheckboxListItem from './CheckboxListItem';


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
        const playersList = this.state.players.map((p, i) => {
            return <CheckboxListItem onChange={this.playerChanged.bind(this, i)} key={p.id} label={p.name} />
        });
        return (
            <div>
                <h1>Select players</h1>
                {playersList}
                <button onClick={this.props.onPlayersSelected.bind(this, this.state.players)}>Continue</button>
            </div>
        )
    }
}
