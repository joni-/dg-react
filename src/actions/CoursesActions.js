import dispatcher from '../dispatcher';


export function createCourse(name, pars) {
    dispatcher.dispatch({
        type: 'CREATE_COURSE',
        name: name,
        pars: pars
    });
}

export function deleteCourse(id) {
    dispatcher.dispatch({
        type: 'DELETE_COURSE',
        id: id
    });
}