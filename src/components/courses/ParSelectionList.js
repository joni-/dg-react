import React, { Component } from 'react';

import ParListEntry from './ParListEntry';


export default class ParSelectionList extends Component {
    render() {
        const parList = this.props.pars.map((p, i) => {
            return (
                <ParListEntry
                    key={i}
                    holeNumber={i + 1}
                    currentPar={p}
                    onParDecreased={this.props.onParDecreased.bind(this, i)}
                    onParIncreased={this.props.onParIncreased.bind(this, i)}/>
            );
        });
        return (
            <div>
                {parList}
            </div>
        );
    }
}
