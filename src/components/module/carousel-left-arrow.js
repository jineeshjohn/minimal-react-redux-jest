import React from 'react';

const CarouselLeftArrow = (props) => (
	<a
		href="#"
		className="carousel__arrow carousel__arrow--left"
		onClick={props.onClick}
	>
		<span className="fa fa-2x fa-angle-left">Left</span>
	</a>
);

export default CarouselLeftArrow;
