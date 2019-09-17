import {modalConstants} from '../constants';

export function displayModal(state = {}, {type, open}) {
    switch (type) {
        case modalConstants.SHOW_MODAL_LOGIN:
            return {
                open
            };
        case modalConstants.HIDE_MODAL_LOGIN:
            return {
                open
            };
        default:
            return state
    }
}

export function displayForm(state = {}, {type, displayForm}) {
    switch (type) {
        case modalConstants.DISPLAY_LOGIN_FORM:
            return {
                displayForm
            };
        case modalConstants.DISPLAY_REGISTER_FORM:
            return {
                displayForm
            };
        default:
            return state
    }
}
