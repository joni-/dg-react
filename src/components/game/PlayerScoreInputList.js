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
            <div>
                {playerList}
            </div>
        )
    }
}
