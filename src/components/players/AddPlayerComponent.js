import React, { Component } from 'react';


export default class AddPlayerComponent extends Component {
    constructor() {
        super();
        this.state = {
            newPlayerName: ''
        };
    }

    playerNameChanged(e) {
        this.setState({
            newPlayerName: e.target.value
        });
    }

    newPlayerAdded() {
        this.props.onNewPlayerAdded(this.state.newPlayerName);
        this.setState({
            newPlayerName: ''
        });
    }

    render() {
        return (
            <div>
                <input
                    class="form-control"
                    value={this.state.newPlayerName}
                    onChange={this.playerNameChanged.bind(this)}
                    placeholder='Name'/>
                <button
                    class="btn btn-success"
                    disabled={!this.state.newPlayerName}
                    onClick={this.newPlayerAdded.bind(this)}>
                    Add
                </button>
            </div>
        )
    }
}
