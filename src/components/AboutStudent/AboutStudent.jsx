import React from 'react';
import './AboutStudent.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsQuote } from 'react-icons/bs';
const AboutStudent = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: '100px',
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
    <section className="AboutStudent py-3 py-lg-4  py-lg-5   ">
      <div className="container py-3 py-lg-4  py-lg-5  ">
        <h2 className="  text-center m-0 p-0  ">What Our Students Say</h2>
        <div className="row  text-center ">
          <Slider className="  my-2 py-3 py-md-4   " {...settings}>
            {data.map((client) => {
              const { id, name, title, comment } = client;
              return (
                <div className="single-client text-center      " key={id}>
                  <div className="text-center">
                    <span className=" rounded-circle  mx-auto ">
                      <BsQuote className="icon  " />
                    </span>
                  </div>
                  <p className="py-2 p-0 m-0 mt-2">
                    <i>{comment}</i>
                  </p>

                  <h5 className="m-0 p-0 ">{name}</h5>
                  <p>{title}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutStudent;
