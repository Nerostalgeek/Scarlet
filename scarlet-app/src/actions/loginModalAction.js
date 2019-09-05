export const showLoginModalAction = () => dispatch => {
    dispatch({
        type: 'DISPLAY_LOGIN_MODAL',
        payload: {isHidden: false}
    })
};

export const hideLoginModalAction = () => dispatch => {
    dispatch({
        type: 'HIDE_LOGIN_MODAL',
        payload: {isHidden: true}
    })
};





