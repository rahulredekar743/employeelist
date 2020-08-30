import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log("2", action.payload.data); //{ 4: post}  key and object
            console.log("3", _.mapKeys(action.payload.data, 'id')); //{ 4: post}  key and object
            return _.mapKeys(action.payload.data, 'id')

        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return {newState};

            return {...state, [action.payload.data.id]: action.payload.data} //key interpolation

        default:
            return state
    }
}