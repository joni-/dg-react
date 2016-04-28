import React, { Component } from 'react';


export default class HoleCountSelection extends Component {
    render() {
        return (
            <div>
                <label>No. of holes</label>
                <button
                    class="btn btn-info"
                    onClick={this.props.onHoleCountDecreased.bind(this)}
                    disabled={this.props.holeCount <= 1}>
                    -
                </button>
                <strong>{this.props.holeCount}</strong>
                <button class="btn btn-info" onClick={this.props.onHoleCountIncreased.bind(this)}>+</button>
            </div>
        );
    }
}
