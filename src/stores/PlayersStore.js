import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


var players = [
    {id: 1, name: 'Foo'},
    {id: 2, name: 'Bar'},
    {id: 3, name: 'Baz'},
    {id: 4, name: 'Zyz'}
];

class PlayersStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return players;
    }

    add(name) {
        players.push({
            id: new Date().getTime(),
            name: name
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
            case 'CREATE': {
                this.add(action.name);
            }
        }
    }
}

const store = new PlayersStore;
dispatcher.register(store.handleAction.bind(store));

export default store;
