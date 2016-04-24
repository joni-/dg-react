import React, { Component } from 'react'

import CoursesStore from '../../stores/CoursesStore';
import CourseSelectionList from './CourseSelectionList';

export default class SelectCourseComponent extends Component {
    render() {
        return (
            <div>
                <h1>Select course</h1>
                <CourseSelectionList
                    courses={CoursesStore.getAll()}
                    onCourseSelected={this.props.onCourseSelected.bind(this)}/>
            </div>
        )
    }
}
