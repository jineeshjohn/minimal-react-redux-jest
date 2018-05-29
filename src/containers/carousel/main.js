
import Carousel from '../../components/module/carousel';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		title: state.carousel.title,
		slides: state.carousel.carouselSlidesData,
	};
};

export default connect( mapStateToProps )(Carousel);

