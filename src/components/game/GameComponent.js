import * as _ from 'lodash';
import React, { Component } from 'react'

import Scorecard from './Scorecard';
import GamesStore from '../../stores/GamesStore';
import * as GamesActions from '../../actions/GamesActions';


export default class GameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHole: 0,
            showScorecard: false,
            course: this.props.course,
            players: this.props.players.map((p) => {
                return _.extend(p, {scores: _.map(this.props.course.pars, _.clone)});
            })
        };
        GamesActions.createGame(this.state);
    }

    previousHole() {
        this.setState({
            currentHole: this.state.currentHole - 1
        });
        GamesActions.updateGame(this.state);
    }

    nextHole() {
        this.setState({
            currentHole: this.state.currentHole + 1
        });
    }

    decreaseScore(player) {
        player.scores[this.state.currentHole]--;
        this.setState({
            players: this.state.players
        });
        GamesActions.updateGame(this.state);
    }

    increaseScore(player) {
        player.scores[this.state.currentHole]++;
        this.setState({
            players: this.state.players
        });
        GamesActions.updateGame(this.state);
    }

    toggleScorecard() {
        this.setState({
            showScorecard: !this.state.showScorecard
        });
        GamesActions.updateGame(this.state);
    }

    render() {
        const playerList = this.state.players.map((p) => {
            const totalScore = _.sum(p.scores);
            return (
                <div key={p.id}>
                    {p.name}
                    <button onClick={this.decreaseScore.bind(this, p)}>-</button>
                    {p.scores[this.state.currentHole]}
                    <button onClick={this.increaseScore.bind(this, p)}>+</button>
                    ({ totalScore })
                </div>
            );
        });

        var scorecard = null;
        if (this.state.showScorecard) {
            scorecard = (<Scorecard course={this.props.course} players={this.state.players} />);
        }

        return (
            <div>
                <button onClick={this.previousHole.bind(this)}>Previous</button>
                {this.state.currentHole + 1}
                <button onClick={this.nextHole.bind(this)}>Next</button>

                {playerList}

                <br />
                <button onClick={this.toggleScorecard.bind(this)}>Toggle scorecard</button>
                {scorecard}
            </div>
        )
    }
}
