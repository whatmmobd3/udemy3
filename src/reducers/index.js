import {combineReducers} from 'redux'
import postsReducer from './postReducer'
import postUser from './postUser'

export default combineReducers({
    posts: postsReducer,
    users:postUser
})