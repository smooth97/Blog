import { combineReducers } from 'redux';
import postingReducer from './postingReducer';

const rootReducer = combineReducers({
    postingReducer,
});

export default rootReducer;