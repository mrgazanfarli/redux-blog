import { types } from '../constants';

export const getPosts = posts => {
    return {
        type: types.getPosts,
        payload: posts
    }
}

export const handlePostsStatus = status => {
    return {
        type: types.postsStatus,
        payload: status
    }
}
