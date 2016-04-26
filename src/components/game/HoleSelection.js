import React, { Component } from 'react'


export default class HoleSelection extends Component {
    render() {
        return (
            <div>
                <button
                    class="btn btn-info"
                    onClick={this.props.onPreviousClicked.bind(this)}
                    disabled={this.props.currentHole === 1}>
                    Previous
                </button>
                <strong>Current hole: {this.props.currentHole}</strong>
                <button
                    class="btn btn-info"
                    onClick={this.props.onNextClicked.bind(this)}
                    disabled={this.props.currentHole === this.props.lastHole}>
                    Next
                </button>
            </div>
        )
    }
}
