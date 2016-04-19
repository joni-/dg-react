import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import Layout from "./components/Layout";
import PlayersComponent from './components/PlayersComponent';
import CoursesComponent from './components/CoursesComponent';
import GameComponent from './components/GameComponent';


const app = document.getElementById('app');
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="game" component={GameComponent} />
            <Route path="players" component={PlayersComponent} />
            <Route path="courses" component={CoursesComponent} />
        </Route>
    </Router>), app);
