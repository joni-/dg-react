import React, { Component } from 'react';

import CoursesStore from '../stores/CoursesStore';
import NewCourseComponent from './courses/NewCourseComponent';
import * as CoursesActions from '../actions/CoursesActions';
import CourseListComponent from './courses/CourseListComponent';

export default class CoursesComponent extends Component {
    constructor() {
        super();
        this.getCourses = this.getCourses.bind(this);
        this.state = {
            courses: CoursesStore.getAll()
        }
    }

    getCourses() {
        this.setState({
            courses: CoursesStore.getAll()
        });
    }

    componentWillMount() {
        CoursesStore.addChangeListener(this.getCourses);
    }

    componentWillUnmount() {
        CoursesStore.removeChangeListener(this.getCourses);
    }

    deleteCourse(course) {
        CoursesActions.deleteCourse(course.id);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseListComponent courses={this.state.courses} onCourseDeleted={this.deleteCourse.bind(this)} />
                <NewCourseComponent />
            </div>
        )
    }
}
