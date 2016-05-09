import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import Layout from "./components/Layout";
import PlayersComponent from './components/PlayersComponent';
import CoursesComponent from './components/CoursesComponent';
import NewGameComponent from './components/NewGameComponent';
import ResumeGameComponent from './components/ResumeGameComponent';
import Menu from './components/menu/Menu';
import NewCourseComponent from './components/courses/NewCourseComponent';
import DownloadCourseComponent from './components/DownloadCourseComponent';


const app = document.getElementById('app');
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Menu} />
            <Route path="newgame" component={NewGameComponent} />
            <Route path="resumeGame" component={ResumeGameComponent} />
            <Route path="players" component={PlayersComponent} />
            <Route path="courses" component={CoursesComponent} />
            <Route path="newcourse" component={NewCourseComponent} />
            <Route path="downloadcourse" component={DownloadCourseComponent} />
        </Route>
    </Router>), app);
