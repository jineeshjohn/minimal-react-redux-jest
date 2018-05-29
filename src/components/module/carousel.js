import React from 'react';
import PropTypes from 'prop-types';
const styles = require('./carousel.scss');

const Carousel = (props) =>	<div className={styles.container}> Testing components Carousel blue!! {props.title}	</div>;

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
};
export default Carousel;

