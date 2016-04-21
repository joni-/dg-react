import React, { Component } from 'react';

import GamesStore from '../stores/GamesStore';


export default class ResumeGameComponent extends Component {
    render() {
        const gameList = GamesStore.getAll().map((game) => {
            return (<li>{game.id} - {game.course.name}</li>);
        });
        return (
            <div>
                <h1>Resume game (list games here)</h1>
                <ul>
                    {gameList}
                </ul>
            </div>
        )
    }
}
