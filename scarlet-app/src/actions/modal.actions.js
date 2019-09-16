import {modalConstants} from '../constants';

export const modalActions = {
    showModalLogin,
    hideModalLogin
};

    function showModalLogin() {
    return {
        type: modalConstants.SHOW_MODAL_LOGIN,
        payload: {open: true}
    };
}

function hideModalLogin() {
    return {
        type: modalConstants.HIDE_MODAL_LOGIN,
        payload: {open: false}
    };
}
