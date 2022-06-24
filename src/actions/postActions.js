/** @desc Post Actions **/

import axios from 'axios';

/** TYPES **/
import {FILTER_POSTS, LOAD_POSTS, POSTS_LOADING} from './types';

export const loadPosts = () => async (dispatch, getState) => {
    try {
        await setLoading();
        let posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {headers: {'Content-Type': 'application/json'}});

        if(posts.status === 200) {
            dispatch({
                type: LOAD_POSTS,
                payload: posts.data
            });
        }
    } catch (e) {
        //TODO handle error
        console.log(e.message);
    }
}

export const filterPosts = (value) => async (dispatch, getState) => {
    const { posts: { posts }} = getState();
    let filtered = [];
    try{
        await setLoading();
        if(value !== ""){
            if(posts.length > 0){
                filtered = posts.filter((post) => {
                    return post.title.toLowerCase().includes(value.toLowerCase());
                });

                dispatch({
                    type: FILTER_POSTS,
                    payload: filtered
                })
            }
        } else {
            dispatch({
                type: FILTER_POSTS,
                payload: []
            })
        }
    } catch (e) {
        //TODO handle error
        console.log(e.message);
    }
}



/**
 * @desc set loading
 */
export const setLoading = () => async (dispatch, getState) => {
    dispatch({
        type: POSTS_LOADING
    })
}
