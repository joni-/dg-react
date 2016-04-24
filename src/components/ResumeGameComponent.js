import React, { Component } from 'react';

import GamesStore from '../stores/GamesStore';
import GameComponent from './game/GameComponent';


export default class ResumeGameComponent extends Component {
    constructor() {
        super();
        this.state = {
            showList: true
        };
    }

    resumeGame(game) {
        this.setState({
            showList: false,
            selectedGame: game
        });
        this.forceUpdate();
    }

    render() {
        const gameList = GamesStore.getAll().map((game) => {
            return (<li class="list-group-item" onClick={this.resumeGame.bind(this, game)}>{game.date} - {game.course.name}</li>);
        });
        var result;
        if (this.state.showList) {
            result = (
                <div>
                    <h1>Resume game</h1>
                    <ul class="list-group">
                        {gameList}
                    </ul>
                </div>
            );
        } else {
            result = (<GameComponent game={this.state.selectedGame} />)
        }
        return result;
    }
}
