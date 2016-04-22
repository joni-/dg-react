import * as _ from 'lodash';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


var dummyPlayers = [
    {id: 1, name: 'Foo'},
    {id: 2, name: 'Bar'},
    {id: 3, name: 'Baz'},
    {id: 4, name: 'Zyz'}
];

localStorage.players = localStorage.players || JSON.stringify(dummyPlayers);

class PlayersStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return JSON.parse(localStorage.players);
    }

    add(name) {
        var players = JSON.parse(localStorage.players);
        players.push({
            id: new Date().getTime(),
            name: name
        });
        localStorage.players = JSON.stringify(players);
        this.emit('change');
    }

    delete(id) {
        var players = JSON.parse(localStorage.players);
        _.remove(players, (p) => { return p.id === id; });
        localStorage.players = JSON.stringify(players);
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
            case 'CREATE_PLAYER': {
                this.add(action.name);
            }
            case 'DELETE_PLAYER': {
                this.delete(action.id);
            }
        }
    }
}

const store = new PlayersStore;
dispatcher.register(store.handleAction.bind(store));

export default store;
