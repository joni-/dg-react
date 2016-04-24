import React, { Component } from 'react';


export default class PlayersListComponent extends Component {
    render() {
        const playerList = this.props.players.map((p) => {
            return <li key={p.id}>{p.name} <button onClick={this.props.onPlayerDeleted.bind(this, p)}>X</button></li>;
        });
        return (
            <div>
                <ul>
                    {playerList}
                </ul>
            </div>
        );
    }
}
