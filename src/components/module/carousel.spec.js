import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './carousel';

describe('Carousel specs', () => {
	const defaultProps = {
		title: 'this is test title'
	};

	const ShallowComponent = props => shallow(<Carousel {...props} />);

	it('should shallow render as expected', () => {
		const component = ShallowComponent(defaultProps);
		expect(component).toMatchSnapshot();
	});
});
