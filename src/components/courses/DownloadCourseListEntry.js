import React, { Component } from 'react';



export default class DownloadCourseList extends Component {
    render() {
        const mark = this.props.isSelected ? 'X' : '';
        return (
            <li
                class="list-group-item"
                onClick={this.props.onChange.bind(this, this.props.course)}>
                <span class="badge">{mark}</span>
                {this.props.course.name}
            </li>
        );
    }
}
