import {
    ADD_POSTING,
    UPDATE_POSTING,
    DELETE_POSTING
} from "../actions"

const initialState = [{
    id: 1,
    title: ' This is First Post',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
}]

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTING:
            return state.concat(action.post);
        case DELETE_POSTING:
            return state.filter(post => post.id !== action.id);
        case UPDATE_POSTING:
            return state.map((post) => {
                if (post.id === action.id) {
                    return post = action.payload
                }
                return post
            })
        default:
            return state;
    }
};

export default posts;

// post => post.id === action.id ? {
//     ...action.post,
// } :
// post

// return state.map(post => {
//     if(post.id === action.id){
//        return {
//            ...post,
//            ...action.title,
//            ...action.description
//        }

//     } else {
//         return post
//     }
//   }
//  )