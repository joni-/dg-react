import React, { Component } from 'react';


export default class ParListEntry extends Component {
    render() {
        return (
            <div>
                {this.props.holeNumber}
                <button onClick={this.props.onParDecreased.bind(this)}>-</button>
                {this.props.currentPar}
                <button onClick={this.props.onParIncreased.bind(this)}>+</button>
            </div>
        );
    }
}
