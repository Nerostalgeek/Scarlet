import {modalConstants} from '../constants';

export function displayModal(state = {}, {type, payload}) {
    switch (type) {
        case modalConstants.SHOW_MODAL_LOGIN:
            return {
                payload
            };
        case modalConstants.HIDE_MODAL_LOGIN:
            return {
                payload
            };
        default:
            return state
    }
}
