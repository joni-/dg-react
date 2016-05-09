import * as _ from 'lodash';
import React, { Component } from 'react';
import Firebase from 'firebase';
import { Button } from 'react-bootstrap';

import * as CoursesActions from '../actions/CoursesActions';
import CoursesStore from '../stores/CoursesStore';
import DownloadCourseList from './courses/DownloadCourseList';


const COURSES_URL = 'https://flickering-fire-447.firebaseio.com/courses';

export default class DownloadCourseComponent extends Component {
    constructor() {
        super();
        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        var firebase = new Firebase(COURSES_URL);
        firebase.on('value', function(snapshot) {
            // Filter courses by name
            const filteredCourses = _.differenceWith(
                snapshot.val(),
                CoursesStore.getAll(),
                (a, b) => { return a.name === b.name; }
            );

            this.setState({
                courses: filteredCourses.map((c) => { return _.extend(c, {selected: false}); })
            });
        }.bind(this), function(error) {
            console.log('Failed to retrieve data', error);
        });
    }

    downloadCourses() {
        const selectedCourses = this.state.courses.filter((c) => {
            return c.selected;
        });

        _.forEach(selectedCourses, (c) => {
            CoursesActions.createCourse(c.name, c.pars);
        });

        const filteredCourses = _.differenceWith(
            this.state.courses,
            CoursesStore.getAll(),
            (a, b) => { return a.name === b.name; }
        );

        this.setState({
            courses: filteredCourses
        });
    }

    selectionChanged(c) {
        c.selected = !c.selected;
        this.setState(this.state.courses);
    }

    render() {
        return (
            <div>
                <h1>Download courses</h1>
                <DownloadCourseList
                    courses={this.state.courses}
                    onSelectionChange={this.selectionChanged.bind(this)}/>
                <Button
                    class="btn btn-success"
                    disabled={!_.some(this.state.courses, (c) => { return c.selected; })}
                    onClick={this.downloadCourses.bind(this)}>
                    Download
                </Button>
            </div>
        )
    }
}
