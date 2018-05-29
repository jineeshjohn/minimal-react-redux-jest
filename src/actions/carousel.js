import { createAction } from 'redux-actions';
import { ActionTypes } from '../constants';

export const CarouselRequest = createAction(ActionTypes.CAROUSEL_REQUEST);
export const CarouselResponse = createAction(ActionTypes.CAROUSEL_RESPONSE);
export const CarouselFailure = createAction(ActionTypes.CAROUSEL_FAILURE);
