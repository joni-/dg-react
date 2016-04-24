import React, { Component } from 'react'


export default class HoleSelection extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPreviousClicked.bind(this)}>Previous</button>
                {this.props.currentHole}
                <button onClick={this.props.onNextClicked.bind(this)}>Next</button>
            </div>
        )
    }
}
