import dispatcher from '../dispatcher';


export function createCourse(name, pars) {
    dispatcher.dispatch({
        type: 'CREATE_COURSE',
        name: name,
        pars: pars
    });
}