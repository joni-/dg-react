import React, { Component } from 'react'


export default class PlayerScoreInputList extends Component {
    render() {
        const playerList = this.props.players.map((p) => {
            const totalScore = _.sum(p.scores);
            return (
                <div key={p.id}>
                    {p.name}
                    <button onClick={this.props.onScoreDecreased.bind(this, p)}>-</button>
                    {p.scores[this.props.currentHole]}
                    <button onClick={this.props.onScoreIncreased.bind(this, p)}>+</button>
                    ({ totalScore })
                </div>
            );
        });
        return (
            <div>
                {playerList}
            </div>
        )
    }
}
