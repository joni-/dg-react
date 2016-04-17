import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


var courses = [
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

class CoursesStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return courses;
    }
}

const store = new CoursesStore;

export default store;
