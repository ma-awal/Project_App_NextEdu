import Slider from 'react-slick';
const SlideRoot = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <Slider Slider {...settings}>
      {props.child}
    </Slider>
  );
};

export default SlideRoot;
