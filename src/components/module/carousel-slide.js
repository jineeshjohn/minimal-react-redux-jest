import React from 'react';


const CarouselSlide = (props) => (
	<li
		className={
			props.index === props.activeIndex
				? 'carousel__slide carousel__slide--active'
				: 'carousel__slide'
		}
	>
		<p className="carousel-slide__content">{props.slide.title}</p>
		{/* <div className="c100 p84 big">
			<span>{props.slide.title}</span>
			<div className="slice">
				<div className="bar" />
				<div className="fill" />
			</div>
		</div> */}
	</li>
);

export default CarouselSlide;
