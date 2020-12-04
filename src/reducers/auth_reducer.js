import * as actions from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case 'auth_user' :
            return {...state, error: '', authenticated: true};

        case 'employees':
            console.log("2", action.payload);
            // return {...state, [action.payload.company]: action.payload}

            return {...state, values: [...action.payload]};
    }
    return state;
}