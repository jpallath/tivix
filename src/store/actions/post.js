import {
    LOAD_POSTS,
    ADD_POST,
    ADD_MAX_TITLE_POST,
    ADD_MAX_BODY_POST,
    ADD_MIN_TITLE_POST,
    ADD_MIN_BODY_POST
} from "../actionTypes";
import { getPosts, postPost } from "../../services/api";

export const loadPosts = (posts, minBody, minTitle, maxBody, maxTitle) => ({
    type: LOAD_POSTS,
    posts,
    minBody,
    minTitle,
    maxBody,
    maxTitle
});

export const fetchPosts = user => {
    return dispatch => {
        getPosts(user).then(res => {
            let posts = res.map((post, index) => {
                return {
                    title: post.title,
                    body: post.body,
                    titleLength: post.title.length,
                    bodyLength: post.body.length
                };
            });
            let minPostBody = posts.reduce((p, v) => {
                return p.bodyLength < v.bodyLength ? p : v;
            });
            let minPostTitle = posts.reduce((p, v) => {
                return p.titleLength < v.titleLength ? p : v;
            });
            let maxPostBody = posts.reduce((p, v) => {
                return p.bodyLength > v.bodyLength ? p : v;
            });
            let maxPostTitle = posts.reduce((p, v) => {
                return p.titleLength > v.titleLength ? p : v;
            });
            dispatch(
                loadPosts(
                    res,
                    minPostBody,
                    minPostTitle,
                    maxPostBody,
                    maxPostTitle
                )
            );
        });
    };
};

export const sendPost = post => ({
    type: ADD_POST,
    post
});

export const sendMinBodyPost = (post, min) => ({
    type: ADD_MIN_BODY_POST,
    post: post,
    min: min
});

export const sendMaxBodyPost = (post, max) => ({
    type: ADD_MAX_BODY_POST,
    post: post,
    max: max
});
export const sendMinTitlePost = (post, min) => ({
    type: ADD_MIN_TITLE_POST,
    post: post,
    min: min
});

export const sendMaxTitlePost = (post, max) => ({
    type: ADD_MAX_TITLE_POST,
    post: post,
    max: max
});

export const addPost = post => {
    return (dispatch, getState) => {
        let { posts } = getState();
        let { maxBody, maxTitle, minBody, minTitle } = posts;
        let newMin;
        let newMax;
        postPost(post).then(res => {
            if (res.title.length < minTitle.titleLength) {
                newMin = { ...post, titleLength: post.title.length };
                dispatch(sendMinTitlePost(post, newMin));
            } else if (res.title.length > maxTitle.titleLength) {
                newMax = { ...post, titleLength: post.title.length };
                dispatch(sendMaxTitlePost(post, newMax));
            } else if (res.body.length > maxBody.bodyLength) {
                newMax = { ...post, bodyLength: post.body.length };
                dispatch(sendMaxBodyPost(post, newMax));
            } else if (res.body.length < minBody.bodyLength) {
                newMin = { ...post, bodyLength: post.body.length };
                dispatch(sendMinBodyPost(post, newMin));
            } else {
                dispatch(sendPost(post));
            }
        });
    };
};
