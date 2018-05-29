import { handleActions } from 'redux-actions';
import assign from 'object.assign';

import initialState from '../store/initialState';
import { CarouselActions } from '../actions';

export default handleActions({
	[CarouselActions.CarouselRequest]: (state, action) => assign({}, state, {
		isFetching: !action.error,
	}),
	[CarouselActions.CarouselResponse]: (state, action) => assign({}, state, {
		isFetching: false,
	}),
	[CarouselActions.CarouselFailure]: state => assign({}, state, {
		isFetching: false,
	})
}, initialState.carousel);
