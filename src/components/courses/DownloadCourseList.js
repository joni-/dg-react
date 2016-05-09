import React, { Component } from 'react';

import DownloadCourseListEntry from './DownloadCourseListEntry';


export default class DownloadCourseList extends Component {
    render() {
        const courseList = this.props.courses.map((c) => {
            return (
                <DownloadCourseListEntry
                    course={c}
                    isSelected={c.selected}
                    onChange={this.props.onSelectionChange.bind(this, c)}/>
            );
        });
        return (
            <div>
                <ul class="list-group">
                    {courseList}
                </ul>
            </div>
        );
    }
}
