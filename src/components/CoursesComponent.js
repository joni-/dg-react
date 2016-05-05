import React, { Component } from 'react';
import { Link } from 'react-router';

import CoursesStore from '../stores/CoursesStore';
import * as CoursesActions from '../actions/CoursesActions';
import CourseListComponent from './courses/CourseListComponent';
import ConfirmationModal from './common/ConfirmationModal';


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

    confirmDelete(course) {
        this.setState({
            courseToDelete: course
        });
    }

    hideConfirmationModal() {
        delete this.state.courseToDelete;
        this.setState(this.state);
    }

    deleteCourse() {
        const id = this.state.courseToDelete.id;
        this.hideConfirmationModal();
        CoursesActions.deleteCourse(id);
    }

    render() {
        var confirmationModal;
        if (this.state.courseToDelete) {
            confirmationModal = (<ConfirmationModal
                    onCancel={this.hideConfirmationModal.bind(this)}
                    onDelete={this.deleteCourse.bind(this)} />);
        }
        return (
            <div>
                {confirmationModal}
                <h1>Courses</h1>
                <CourseListComponent
                    courses={this.state.courses}
                    onCourseDeleted={this.confirmDelete.bind(this)} />
                <Link to="newcourse">Add new course</Link>
            </div>
        )
    }
}
