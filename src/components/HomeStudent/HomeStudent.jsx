import React from 'react';
import Slider from 'react-slick';
import StudentData from '../../data/StudentData';
import { FaQuoteLeft } from 'react-icons/fa';
import './H-student.css';
const HomeStudent = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="H-student py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="H-head text-center">
          <h5>testmonial </h5>
          <h2>Our Student Says</h2>
        </div>
        <div className="row">
          <Slider {...settings}>
            {StudentData.map((item) => (
              <div key={item.id} className="single-slide  py-4 px-3 my-5  ">
                <p>{item.text}</p>
                <h6>
                  <span className="fw-semibold pe-2">{item.name}</span>(
                  {item.title})
                </h6>
                <span className="icon rounded-circle">
                  <FaQuoteLeft />
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeStudent;
