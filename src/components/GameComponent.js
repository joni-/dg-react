import React, { Component } from 'react'

import SelectPlayersComponent from './game/SelectPlayersComponent';
import SelectCourseComponent from './game/SelectCourseComponent';


export default class GameComponent extends Component {
    constructor() {
        super();
        var initialComponent = (<SelectPlayersComponent onPlayersSelected={this.playersSelected.bind(this)} />);
        this.state = {
            currentComponent: initialComponent
        };
    }

    courseSelected(course) {
        console.log(course);
    }

    playersSelected(players) {
        this.setState({
            currentComponent: (<SelectCourseComponent onCourseSelected={this.courseSelected.bind(this)} />)
        });
    }

    render() {
        return (
            <div>
                {this.state.currentComponent}
            </div>
        )
    }
}
