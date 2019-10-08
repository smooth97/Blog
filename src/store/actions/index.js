export const ADD_POSTING = 'ADD_POSTING';
export const EDIT_POSTING = 'EDIT_POSTING';
export const DELETE_POSTING = 'DELETE_POSTING';

let nextId = 2;

export const addPosting = (title, description) => {
    return {
        type: ADD_POSTING,
        post: {
            id: nextId++,
            title,
            description
        }
    };
}

export const editPosting = (id) => {
    return {
        type: EDIT_POSTING,
        id
    }
}

export const deletePosting = (id) => {
    return {
        type: DELETE_POSTING,
        id
    }
}