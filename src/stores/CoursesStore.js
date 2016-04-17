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

    add(name, pars) {
        courses.push({
            id: new Date().getTime(),
            name: name,
            pars: pars
        });
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
        }
    }
}

const store = new CoursesStore;
dispatcher.register(store.handleAction.bind(store));

export default store;
