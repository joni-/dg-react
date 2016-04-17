import React, { Component } from 'react'


var players = [
    {id: 1, name: 'Foo'},
    {id: 2, name: 'Bar'},
    {id: 3, name: 'Baz'},
    {id: 4, name: 'Zyz'}
];

export default class PlayersComponent extends Component {
    constructor() {
        super();
        this.state = {
            newPlayerName: ''
        };
    }

    playerNameChanged(e) {
        this.setState({
            newPlayerName: e.target.value
        });
    }

    addNewPlayer() {
        const name = this.state.newPlayerName;
        players.push({
            id: new Date().getTime(),
            name: this.state.newPlayerName
        });
        this.setState({
            newPlayerName: ''
        });
    }

    render() {
        const playerList = players.map((p) => {
            return <li key={p.id}>{p.name}</li>;
        });
        return (
            <div>
                <h1>Players</h1>
                <ul>
                    {playerList}
                </ul>
                <input value={this.state.newPlayerName} onChange={this.playerNameChanged.bind(this)} />
                <button onClick={this.addNewPlayer.bind(this)}>Add</button>
            </div>
        )
    }
}
