import React, { Component } from 'react';


export default class CourseListEntry extends Component {
    render() {
        const c = this.props.course;
        return (
            <li key={c.id}>{c.name} ({c.pars.length}) <button onClick={this.props.onCourseDeleted.bind(this, c)}>X</button></li>
        );
    }
}
