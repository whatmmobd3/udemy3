export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log('post');
            return action.payload;
            
        default:
            return state
    }
}