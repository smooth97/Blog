import { ADD_POSTING, EDIT_POSTING, DELETE_POSTING } from "../actions"

const initialState = [
    {
        id: 1,
        title: ' This is First Post',
        description: '포스팅 1',
    }
]

const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTING:
            return state.concat(action.post);
        case DELETE_POSTING:
            return state.filter(post => post.id !== action.id)
        default:
          return state;
      }
};

export default posts;

// {
//     id: 1,
//     title: 'First Post',
//     date: '2019-10-04',
//     description: '',
//     action: {
//         edit: false,
//         delete: false
//     }
// },
// {
//     id: 2,
//     title: 'Favorite Food',
//     date: '2019-10-04',
//     description: '',
//     action: {
//         edit: false,
//         delete: false
//     }
// },
// {
//     id: 3,
//     title: 'Today I Learn',
//     date: '2019-10-04',
//     description: '',
//     action: {
//         edit: false,
//         delete: false
//     }
// },


// switch (action.type) {
//     case ADD_POSTING :
//         return {
//             ...state,
//             posting: state.posting.concat({
//                 title: action.title,
//                 description: action.description,
//                 id: action.id
//             })
//         }
//     case DELETE_POSTING :
//         return {
//             ...state,
//             posting: state.posting.filter(post => post.id !== action.id)
//         };
// }