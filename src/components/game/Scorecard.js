import React, { Component } from 'react'


export default class Scorecard extends Component {
    render() {
        const playerNames = this.props.players.map((p) => {
            return (<th key={p.id}>{p.name}</th>);
        });
        const scoreList = this.props.course.pars.map((p, i) => {
            const currentHoleScores = this.props.players.map((player) => {
                return (<td>{player.scores[i]}</td>);
            });
            return (
                <tr>
                    <td>{i + 1}</td>
                    {currentHoleScores}
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        {playerNames}
                    </tr>
                </thead>
                <tbody>
                    {scoreList}
                </tbody>
            </table>
        )
    }
}
