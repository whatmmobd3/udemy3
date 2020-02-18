import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts')
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: res.data
    })
}

export const fetchUser = (param) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${param}`)
    
    dispatch({
        type: 'FETCH_USER',
        payload: res
    })
}

