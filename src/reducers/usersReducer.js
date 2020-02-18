export default (state = [], action) => {
    switch (action.style) {
        case 'FETCH_USER':
            console.log('user');
            return [...state, action.payload]
            
        default:
            return state
    }
}