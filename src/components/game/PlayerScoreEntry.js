import React, { Component } from 'react'


export default class PlayerScoreEntry extends Component {
    render() {
        const p = this.props.player;
        const totalScore = _.sum(p.scores);
        return (
            <div>
                {p.name}
                <button onClick={this.props.onScoreDecreased.bind(this, p)}>-</button>
                {p.scores[this.props.currentHole]}
                <button onClick={this.props.onScoreIncreased.bind(this, p)}>+</button>
                ({ totalScore })
            </div>
        )
    }
}
