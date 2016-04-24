import React, { Component } from 'react'


export default class CheckboxListItem extends Component {
    render() {
        const mark = this.props.isSelected == true ? 'X' : '';
        return (
            <li class="list-group-item" onClick={this.props.onChange.bind(this)}>
                <span class="badge">{mark}</span>
                {this.props.label}
            </li>
        )
    }
}
