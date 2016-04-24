import React, { Component } from 'react';


export default class CourseListComponent extends Component {
    render() {
        const courseList = this.props.courses.map((c) => {
            return (<li key={c.id}>{c.name} ({c.pars.length}) <button onClick={this.props.onCourseDeleted.bind(this, c)}>X</button></li>);
        });
        return (
            <div>
                <ul>
                    {courseList}
                </ul>
            </div>
        );
    }
}
