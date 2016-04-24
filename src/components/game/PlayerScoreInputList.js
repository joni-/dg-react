import React, { Component } from 'react'

import PlayerScoreEntry from './PlayerScoreEntry';


export default class PlayerScoreInputList extends Component {
    render() {
        const playerList = this.props.players.map((p) => {
            return (
                <PlayerScoreEntry
                    key={p.id}
                    player={p}
                    currentHole={this.props.currentHole}
                    onScoreDecreased={this.props.onScoreDecreased.bind(this, p)}
                    onScoreIncreased={this.props.onScoreIncreased.bind(this, p)}/>
            );
        });
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th></th>
                        <th>Score</th>
                        <th></th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {playerList}
                </tbody>
            </table>
        )
    }
}
