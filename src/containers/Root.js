import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import Carousel from './carousel/main';

export default function Root({store}) {
	return (
		<Provider store={store}>
			<div>
				<Carousel />
			</div>
		</Provider>
	);
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};
