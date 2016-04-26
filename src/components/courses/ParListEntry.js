import React, { Component } from 'react';


export default class ParListEntry extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.holeNumber}</td>
                <td>
                    <button
                        class="btn btn-default"
                        onClick={this.props.onParDecreased.bind(this)}
                        disabled={this.props.currentPar <= 1}>
                        -
                    </button>
                </td>
                <td>{this.props.currentPar}</td>
                <td>
                    <button
                        class="btn btn-default"
                        onClick={this.props.onParIncreased.bind(this)}>
                        +
                    </button>
                </td>
            </tr>
        );
    }
}
