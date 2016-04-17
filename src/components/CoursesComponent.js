import React, { Component } from 'react';

import CoursesStore from '../stores/CoursesStore';


export default class CoursesComponent extends Component {
    constructor() {
        super();
        this.state = {
            courses: CoursesStore.getAll()
        }
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
            </div>
        )
    }
}
