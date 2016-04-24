import React, { Component } from 'react';


export default class HoleCountSelection extends Component {
    render() {
        return (
            <div>
                No. of holes
                <button onClick={this.props.onHoleCountDecreased.bind(this)}>-</button>
                {this.props.holeCount}
                <button onClick={this.props.onHoleCountIncreased.bind(this)}>+</button>
            </div>
        );
    }
}
