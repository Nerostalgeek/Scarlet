export default (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_LOGIN_MODAL':
            return {
                result: action.payload
            };
        case 'HIDE_LOGIN_MODAL':
            return {
                result: action.payload
            };
        default:
            return state
    }
}
