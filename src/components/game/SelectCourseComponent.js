import React, { Component } from 'react'

import CoursesStore from '../../stores/CoursesStore';

export default class SelectCourseComponent extends Component {
    render() {
        const courseList = CoursesStore.getAll().map((c) => {
            return (
                <div>
                    <button key={c.id} onClick={this.props.onCourseSelected.bind(this, c)}>{c.name}</button>
                    <br />
                </div>
            );
        });
        return (
            <div>
                <h1>Select course</h1>
                {courseList}
            </div>
        )
    }
}
