import dispatcher from '../dispatcher';


export function createPlayer(name) {
    dispatcher.dispatch({
        type: 'CREATE',
        name: name
    });
}