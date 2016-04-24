import React, { Component } from 'react';

import PlayersListEntry from './PlayerListEntry';


export default class PlayersListComponent extends Component {
    render() {
        const playerList = this.props.players.map((p) => {
            return (<PlayersListEntry player={p} onPlayerDeleted={this.props.onPlayerDeleted.bind(this, p)} />);
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
