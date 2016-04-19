import * as _ from 'lodash';
import React, { Component } from 'react'

import SelectPlayersComponent from './game/SelectPlayersComponent';
import SelectCourseComponent from './game/SelectCourseComponent';
import GameComponent from './game/GameComponent';


export default class NewGameComponent extends Component {
    constructor() {
        super();
        var initialComponent = (<SelectPlayersComponent onPlayersSelected={this.playersSelected.bind(this)} />);
        this.state = {
            currentComponent: initialComponent
        };
    }

    courseSelected(course) {
        this.setState({
            currentComponent: (<GameComponent course={course} players={this.state.players} />)
        });
    }

    playersSelected(players) {
        this.setState({
            currentComponent: (<SelectCourseComponent onCourseSelected={this.courseSelected.bind(this)} />),
            players: _.filter(players, (p) => { return p.selected; })
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
