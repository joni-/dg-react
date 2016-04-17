import * as _ from 'lodash';
import React, { Component } from 'react';

import * as CoursesActions from '../../actions/CoursesActions';


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
                Name: <input value={this.state.name} onChange={this.nameChanged.bind(this)} />
                <br />
                No. of holes
                <button onClick={this.decreaseHoleCount.bind(this)}>-</button>
                {this.state.pars.length}
                <button onClick={this.increaseHoleCount.bind(this)}>+</button>
                <br />
                {parList}
                <button onClick={this.createCourse.bind(this)}>Add</button>
            </div>
        )
    }
}
