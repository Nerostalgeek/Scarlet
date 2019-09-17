import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import {displayModal, displayForm} from './modal.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    displayModal,
    displayForm,

});

export default rootReducer;
