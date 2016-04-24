import React, { Component } from 'react'

import CourseSelectionListEntry from './CourseSelectionListEntry';


export default class CourseSelectionList extends Component {
    render() {
        const courseList = this.props.courses.map((c) => {
            return (
                <CourseSelectionListEntry
                    key={c.id}
                    course={c}
                    onCourseSelected={this.props.onCourseSelected.bind(this, c)}/>
            );
        });
        return (
            <div>
                {courseList}
            </div>
        )
    }
}
