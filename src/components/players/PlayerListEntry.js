import React, { Component } from 'react';


export default class PlayerListEntry extends Component {
    render() {
        const p = this.props.player;
        return (
            <li key={p.id}>{p.name} <button onClick={this.props.onPlayerDeleted.bind(this, p)}>X</button></li>
        );
    }
}
