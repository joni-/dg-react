import React, { Component } from 'react'

import CheckboxListItem from './CheckboxListItem';


export default class PlayerSelectionList extends Component {
    render() {
        const playersList = this.props.players.map((p, i) => {
            return <CheckboxListItem onChange={this.props.onPlayerSelected.bind(this, i)} key={p.id} label={p.name} />
        });
        return (
            <div>
                {playersList}
            </div>
        )
    }
}
