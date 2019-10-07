import React, { useReducer, createContext } from "react";

export const PostingContext = createContext();

const initialPostings = [
  {
    id: 1,
    title: "First Post",
    date: "2019-10-04",
    action: {
      edit: false,
      delete: false
    }
  },
  {
    id: 2,
    title: "Favorite Food",
    date: "2019-10-04",
    action: {
      edit: false,
      delete: false
    }
  },
  {
    id: 3,
    title: "Today I Learn",
    date: "2019-10-04",
    action: {
      edit: false,
      delete: false
    }
  }
];

const PostingReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.type);
    case 'EDIT':
      return state
    case 'REMOVE' :
      return state.filter(posting => posting.id !== action.id);
    default :
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const StateContext = createContext();
const DispatchContext = createContext();

export const PostingProvider = ({ childeren }) => {
  const [state, dispatch] = useReducer(PostingReducer, initialPostings);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {childeren}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}