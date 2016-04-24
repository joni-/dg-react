import React, { Component } from 'react';


export default class PlayerListEntry extends Component {
    render() {
        const p = this.props.player;
        return (
            <li class="list-group-item" key={p.id}>
                <span class="badge" onClick={this.props.onPlayerDeleted.bind(this, p)}>
                    X
                </span>
                {p.name}
            </li>
        );
    }
}
