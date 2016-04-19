import React, { Component } from 'react'


export default class CheckboxListItem extends Component {
    isChecked() {
        console.log('yoyoyo');
        return false;
    }

    render() {
        return (
            <div>
                <label>{this.props.label}
                    <input onChange={this.props.onChange.bind(this)} type="checkbox" />
                </label>
            </div>
        )
    }
}
