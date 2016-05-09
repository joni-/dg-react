import * as _ from 'lodash';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


var dummyCourses = [
    {
        id: 1,
        name: 'Utra',
        pars: [4, 4, 3, 4, 3, 3, 3, 3, 4, 4]
    },
    {
        id: 2,
        name: 'Meilahti',
        pars: [3, 3, 3, 3, 3, 3, 3]
    },
    {
        id: 3,
        name: 'Karsikko',
        pars: [3, 3, 3, 3, 3, 3, 3, 3]
    }
];

localStorage.courses = localStorage.courses || JSON.stringify(dummyCourses);

function getNextId() {
    const course = _.maxBy(JSON.parse(localStorage.courses), (c) => { return c.id; });
    return course ? (course.id + 1) : 1;
}

class CoursesStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return JSON.parse(localStorage.courses);
    }

    add(name, pars) {
        var courses = JSON.parse(localStorage.courses);
        courses.push({
            id: getNextId(),
            name: name,
            pars: pars
        });
        localStorage.courses = JSON.stringify(courses);
        this.emit('change');
    }

    delete(id) {
        var courses = JSON.parse(localStorage.courses);
        _.remove(courses, (c) => { return c.id === id; });
        localStorage.courses = JSON.stringify(courses);
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }


    handleAction(action) {
        switch (action.type) {
            case 'CREATE_COURSE': {
                this.add(action.name, action.pars);
            }
            case 'DELETE_COURSE': {
                this.delete(action.id);
            }
        }
    }
}

const store = new CoursesStore;
dispatcher.register(store.handleAction.bind(store));

export default store;
