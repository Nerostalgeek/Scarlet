import {modalConstants} from '../constants';

export const modalActions = {
    showModalLogin,
    hideModalLogin,
    displayLoginForm,
    displayRegisterForm,
};

    function showModalLogin() {
    return {
        type: modalConstants.SHOW_MODAL_LOGIN,
        open: true
    };
}

function hideModalLogin() {
    return {
        type: modalConstants.HIDE_MODAL_LOGIN,
        open: false
    };
}

function displayLoginForm() {
    return {
        type: modalConstants.DISPLAY_LOGIN_FORM,
        displayForm: "login"
    };
}

function displayRegisterForm() {
    return {
        type: modalConstants.DISPLAY_REGISTER_FORM,
        displayForm: "register"
    };
}
