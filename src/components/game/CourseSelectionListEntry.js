import React, { Component } from 'react'


export default class CourseSelectionListEntry extends Component {
    render() {
        const c = this.props.course;
        return (
            <li class="list-group-item" onClick={this.props.onCourseSelected.bind(this, c)}>
                {c.name}
            </li>
        )
    }
}
