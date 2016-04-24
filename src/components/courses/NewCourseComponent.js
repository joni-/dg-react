import * as _ from 'lodash';
import React, { Component } from 'react';

import * as CoursesActions from '../../actions/CoursesActions';
import HoleCountSelection from './HoleCountSelection';
import ParSelectionList from './ParSelectionList';


const DEFAULT_PAR_COUNT = 3;
const DEFAULT_HOLE_COUNT = 9;

export default class NewCourseComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pars: _.fill(Array(DEFAULT_HOLE_COUNT), DEFAULT_PAR_COUNT)
        };
    }

    decreaseHoleCount() {
        this.setState({
            pars: _.dropRight(this.state.pars)
        });
    }

    increaseHoleCount() {
        this.setState({
            pars: _.concat(this.state.pars, DEFAULT_PAR_COUNT)
        });
    }

    createCourse() {
        CoursesActions.createCourse(this.state.name, this.state.pars);
        this.setState({
            name: ''
        });
    }

    nameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }

    decreasePar(i) {
        this.state.pars[i]--;
        this.setState({
            pars: this.state.pars
        });
    }

    increasePar(i) {
        this.state.pars[i]++;
        this.setState({
            pars: this.state.pars
        });
    }

    render() {
        return (
            <div>
                <label>Name:
                    <input class="form-control" value={this.state.name} onChange={this.nameChanged.bind(this)} />
                </label>

                <HoleCountSelection
                    holeCount={this.state.pars.length}
                    onHoleCountDecreased={this.decreaseHoleCount.bind(this)}
                    onHoleCountIncreased={this.increaseHoleCount.bind(this)}/>

                <ParSelectionList
                    pars={this.state.pars}
                    onParDecreased={this.decreasePar.bind(this)}
                    onParIncreased={this.increasePar.bind(this)}/>

                <button class="btn btn-success" onClick={this.createCourse.bind(this)}>Add</button>
            </div>
        )
    }
}
