import {initialState} from '../initialState';
import * as actions from '../constants/actions';

export function image(state = initialState.image, action) {
    switch (action.type) {
        case actions.SET_IMAGE:
            return Object.assign({}, state, {url: action.url})

        case actions.ADD_ANNOTATION:
            return Object.assign({}, state, {
                annotations: Object.assign({}, state.annotations.concat(action.annotation))
            });

        case actions.REMOVE_ANNOTATION:
            return Object.assign({}, state, {
                annotations: Object.assign({}, state.annotations.splice(-1, 1))
            });

        
        
        default:
            return state;
    }
}