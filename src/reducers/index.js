import {combineReducers} from 'redux';
import PostsReducer from './reducer_posts';

import {reducer as formReducer} from 'redux-form'; //redux form will make it easy for us not using actions

const rootReducer = combineReducers({
    // state: (state = {}) => state
    posts: PostsReducer,

    form: formReducer
});

export default rootReducer;
