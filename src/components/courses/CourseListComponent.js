import React, { Component } from 'react';

import CourseListEntry from './CourseListEntry';


export default class CourseListComponent extends Component {
    render() {
        const courseList = this.props.courses.map((c) => {
            return (<CourseListEntry course={c} onCourseDeleted={this.props.onCourseDeleted.bind(this, c)} />);
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
