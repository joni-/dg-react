import * as _ from 'lodash';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

var games = [];

class GamesStore extends EventEmitter {
    constructor() {
        super();
    }

    getAll() {
        return games;
    }

    add(game) {
        games.push(_.extend(game, {id: new Date().getTime()}));
        this.emit('change');
    }

    update(game) {
        const i = _.findIndex(games, (g) => { return g.id === game.id; });
        games[i] = game;
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
