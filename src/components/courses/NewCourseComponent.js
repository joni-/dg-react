import * as _ from 'lodash';
import React, { Component } from 'react';

import * as CoursesActions from '../../actions/CoursesActions';
import HoleCountSelection from './HoleCountSelection';

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
        const parList = this.state.pars.map((p, i) => {
            return (
                <div key={i}>
                    {i + 1}
                    <button onClick={this.decreasePar.bind(this, i)}>-</button>
                    {p}
                    <button onClick={this.increasePar.bind(this, i)}>+</button>
                </div>
            );
        });
        return (
            <div>
                <label>Name:
                    <input class="form-control" value={this.state.name} onChange={this.nameChanged.bind(this)} />
                </label>

                <HoleCountSelection
                    holeCount={this.state.pars.length}
                    onHoleCountDecreased={this.decreaseHoleCount.bind(this)}
                    onHoleCountIncreased={this.increaseHoleCount.bind(this)}/>

                {parList}
                <button class="btn btn-success" onClick={this.createCourse.bind(this)}>Add</button>
            </div>
        )
    }
}
