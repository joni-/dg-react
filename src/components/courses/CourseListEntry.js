import React, { Component } from 'react';


export default class CourseListEntry extends Component {
    render() {
        const c = this.props.course;
        return (
            <li class="list-group-item" key={c.id}>
                <span class="badge" onClick={this.props.onCourseDeleted.bind(this, c)}>X</span>
                {c.name} ({c.pars.length})
            </li>
        );
    }
}
