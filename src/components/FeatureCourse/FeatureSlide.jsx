import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './F-slide.css';
import { BiSolidUser } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { BsFillClockFill } from 'react-icons/bs';
const FeatureSlide = ({ data }) => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <div className="F-slide  ">
      <Slider className="py-3 py-lg-4 m-auto" {...settings}>
        {data.map((item) => (
          <div key={item.id} className="single-slide  pb-3   ">
            <div className="image">
              <img src={item.img} className="img-fluid  w-100" alt="img" />
              <span className="price">$ {item.price}</span>
            </div>
            <div className="icons d-flex justify-content-between py-2 px-3 border-bottom  ">
              <span>
                <BiSolidUser className="icon" /> Next Edu
              </span>
              <span>
                <HiUserGroup className="icon" />
                {item.sit}
              </span>
              <span>
                <BsFillClockFill className="icon" />
                {item.duration}
              </span>
            </div>

            <div className=" px-3 py-3 ">
              <h4 className=" ">{item.title}</h4>
              <p className="p-0 m-0 mb-1  ">{item.desc}</p>
              <button className="btn slide-btn rounded-0 mt-2">
                <Link to="/apply">Apply Now</Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSlide;
