import * as _ from 'lodash';
import React, { Component } from 'react'

import Scorecard from './Scorecard';
import GamesStore from '../../stores/GamesStore';
import * as GamesActions from '../../actions/GamesActions';
import HoleSelection from './HoleSelection';
import PlayerScoreInputList from './PlayerScoreInputList';


export default class GameComponent extends Component {
    constructor(props) {
        super(props);
        if (this.props.game) {
            this.state = this.props.game;
        } else {
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
    }

    previousHole() {
        this.setState({
            currentHole: this.state.currentHole - 1
        });
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
    }

    increaseScore(player) {
        player.scores[this.state.currentHole]++;
        this.setState({
            players: this.state.players
        });
    }

    toggleScorecard() {
        this.setState({
            showScorecard: !this.state.showScorecard
        });
    }

    render() {
        if (this.state.id) {
            GamesActions.updateGame(this.state);
        }

        var scorecard = null;
        if (this.state.showScorecard) {
            scorecard = (<Scorecard course={this.state.course} players={this.state.players} />);
        }

        return (
            <div>
                <HoleSelection
                    currentHole={this.state.currentHole + 1}
                    lastHole={this.state.course.pars.length}
                    onNextClicked={this.nextHole.bind(this)}
                    onPreviousClicked={this.previousHole.bind(this)} />

                <PlayerScoreInputList
                    currentHole={this.state.currentHole}
                    players={this.state.players}
                    onScoreDecreased={this.decreaseScore.bind(this)}
                    onScoreIncreased={this.increaseScore.bind(this)}/>

                <br />
                <button class="btn btn-success" onClick={this.toggleScorecard.bind(this)}>Toggle scorecard</button>
                {scorecard}
            </div>
        )
    }
}
