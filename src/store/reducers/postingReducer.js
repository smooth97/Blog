import { ADD_POSTING, EDIT_POSTING, DELETE_POSTING } from "../actions"

const initialState = {
    input: '',
    postings: [
        
    ]
}

const postingReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
          return state;
      }
};

export default postingReducer;

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