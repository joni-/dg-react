import * as _ from 'lodash';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

localStorage.games = localStorage.games || JSON.stringify([]);

class GamesStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return JSON.parse(localStorage.games);
    }

    add(game) {
        var games = JSON.parse(localStorage.games);
        games.push(_.extend(game, {id: new Date().getTime()}));
        localStorage.games = JSON.stringify(games);
        this.emit('change');
    }

    update(game) {
        var games = JSON.parse(localStorage.games);
        const i = _.findIndex(games, (g) => { return g.id === game.id; });
        games[i] = game;
        localStorage.games = JSON.stringify(games);
        this.emit('change');
    }

    handleAction(action) {
        switch (action.type) {
            case 'CREATE_GAME': {
                this.add(action.game);
            }
            case 'UPDATE_GAME': {
                this.update(action.game);
            }
        }
    }
}

const store = new GamesStore;
dispatcher.register(store.handleAction.bind(store));

export default store;
