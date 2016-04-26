import React, { Component } from 'react'


export default class PlayerScoreEntry extends Component {
    render() {
        const p = this.props.player;
        const score = p.scores[this.props.currentHole];
        const totalScore = _.sum(p.scores);
        return (
            <tr>
                <td>{p.name}</td>
                <td>
                    <button
                        class="btn btn-default"
                        onClick={this.props.onScoreDecreased.bind(this, p)}
                        disabled={score <= 1}>
                        -
                    </button>
                </td>
                <td>{score}</td>
                <td>
                    <button
                        class="btn btn-default"
                        onClick={this.props.onScoreIncreased.bind(this, p)}>
                        +
                    </button>
                </td>
                <td>({ totalScore })</td>
            </tr>
        )
    }
}
