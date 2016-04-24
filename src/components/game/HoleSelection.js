import React, { Component } from 'react'


export default class HoleSelection extends Component {
    render() {
        return (
            <div>
                <button class="btn btn-info" onClick={this.props.onPreviousClicked.bind(this)}>Previous</button>
                <strong>Current hole: {this.props.currentHole}</strong>
                <button class="btn btn-info" onClick={this.props.onNextClicked.bind(this)}>Next</button>
            </div>
        )
    }
}
