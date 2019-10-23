import { combineReducers } from 'redux';

import { postsReducer, postsStatusReducer } from './posts';

export default combineReducers({
    posts: postsReducer,
    postsStatus: postsStatusReducer
});