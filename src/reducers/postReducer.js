/** @desc Post Reducer **/

/** TYPES **/
import {FILTER_POSTS, LOAD_POSTS, POSTS_LOADING} from '../actions/types';

/** Initial State **/
const initialState = {
    posts: [],
    filteredPosts: [],
    is_loading: false
}

/** REDUCER **/
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload,
                is_loading: false
            }
        case FILTER_POSTS:
            return {
                ...state,
                filteredPosts: action.payload,
                is_loading: false
            }
        case POSTS_LOADING:
            return {
                ...state,
                is_loading: true
            }
        default:
            return state;
    }

}

