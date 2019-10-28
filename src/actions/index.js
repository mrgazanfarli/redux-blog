import { types } from '../constants';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const getPosts = posts => {
//     return {
//         type: types.getPosts,
//         payload: posts
//     }
// }

export const getPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: types.getPosts,
        payload: response.data
    });
}

export const handlePostsStatus = status => {
    return {
        type: types.postsStatus,
        payload: status
    }
}
