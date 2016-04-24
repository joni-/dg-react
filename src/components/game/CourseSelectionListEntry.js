import React, { Component } from 'react'


export default class CourseSelectionListEntry extends Component {
    render() {
        const c = this.props.course;
        return (
            <div>
                <button onClick={this.props.onCourseSelected.bind(this, c)}>{c.name}</button>
            </div>
        )
    }
}
