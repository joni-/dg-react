import React, { Component } from 'react';

import CoursesStore from '../stores/CoursesStore';
import NewCourseComponent from './courses/NewCourseComponent';


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

    render() {
        const courseList = this.state.courses.map((c) => {
            return (<li key={c.id}>{c.name}</li>);
        });
        return (
            <div>
                <h1>Courses</h1>
                <ul>
                    {courseList}
                </ul>
                <NewCourseComponent />
            </div>
        )
    }
}
