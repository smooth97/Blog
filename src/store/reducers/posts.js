import {
    ADD_POSTING,
    UPDATE_POSTING,
    DELETE_POSTING
} from "../actions"

const initialState = [{
    id: 1,
    title: ' This is First Post',
    description: '포스팅 1',
}]

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTING:
            return state.concat(action.post);
        case DELETE_POSTING:
            return state.filter(post => post.id !== action.id);
        case UPDATE_POSTING:
            return state.map(post => post.id === action.id ?
                ({
                    ...state,
                    id: post.id,
                    title: post.title,
                    description: post.des
                }) :
                post
            )
        default:
            return state;
    }
};

export default posts;

// post => post.id === action.id ? {
//     ...action.post,
// } :
// post