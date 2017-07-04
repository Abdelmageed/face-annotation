import {initialState} from '../initialState';
import * as actions from '../constants/actions';

export function image(state = initialState.image, action) {
    switch (action.type) {
        case actions.SET_IMAGE:
            return Object.assign({}, state, {url: action.url})

        case actions.ADD_ANNOTATION: {
            const newAnnotations = state.annotations.concat(action.annotation);
            return Object.assign({}, state, {annotations: newAnnotations});
        }

        case actions.REMOVE_ANNOTATION:{
            const newAnnotations = state.annotations.splice(-1, 1);
            return Object.assign({}, state, {annotations: newAnnotations});
        }

        
        
        default:
            return state;
    }
}