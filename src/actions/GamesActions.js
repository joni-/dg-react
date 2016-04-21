import dispatcher from '../dispatcher';


export function createGame(game) {
    dispatcher.dispatch({
        type: 'CREATE_GAME',
        game: game
    });
}

export function updateGame(game) {
    dispatcher.dispatch({
        type: 'UPDATE_GAME',
        game: game
    });
}