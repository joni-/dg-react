import React, { Component } from 'react';


export default class ParSelectionList extends Component {
    render() {
        const parList = this.props.pars.map((p, i) => {
            return (
                <div key={i}>
                    {i + 1}
                    <button onClick={this.props.onParDecreased.bind(this, i)}>-</button>
                    {p}
                    <button onClick={this.props.onParIncreased.bind(this, i)}>+</button>
                </div>
            );
        });
        return (
            <div>
                {parList}
            </div>
        );
    }
}
