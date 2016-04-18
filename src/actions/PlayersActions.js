import dispatcher from '../dispatcher';


export function createPlayer(name) {
    dispatcher.dispatch({
        type: 'CREATE_PLAYER',
        name: name
    });
}

export function deletePlayer(id) {
    dispatcher.dispatch({
        type: 'DELETE_PLAYER',
        id: id
    });
}