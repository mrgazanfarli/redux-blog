import { types, postStatuses } from '../constants';

export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case types.getPosts:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export const postsStatusReducer = (state = postStatuses.loading, action) => {
    switch (action.type) {
        case types.postsStatus:
            return action.payload;
        default:
            return state;
    }
}