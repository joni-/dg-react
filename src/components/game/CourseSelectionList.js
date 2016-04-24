import React, { Component } from 'react'


export default class CourseSelectionList extends Component {
    render() {
        const courseList = this.props.courses.map((c) => {
            return (
                <div key={c.id}>
                    <button onClick={this.props.onCourseSelected.bind(this, c)}>{c.name}</button>
                    <br />
                </div>
            );
        });
        return (
            <div>
                {courseList}
            </div>
        )
    }
}
