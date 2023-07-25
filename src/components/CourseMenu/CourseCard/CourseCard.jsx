import React, { useContext } from 'react';
import { CourseContext } from '../../../context/CourseContext';
import './CourseCard.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaComment } from 'react-icons/fa';
const CourseCard = () => {
  const { menu } = useContext(CourseContext);
  return (
    <div class="row CourseCard justify-content-center mx-auto gy-3 gy-md-4">
      {menu.map((item) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={item.id}>
            <div className="single-card   ">
              <img src={item.img} className="img-fluid w-100 " alt="img" />
              <div className="card-info pt-5    text-center">
                <span className="rounded-circle text-center  price ">
                  ${item.price}
                </span>
                <h5>{item.title}</h5>
                <p className="px-2">{item.desc}</p>
                <div className="icons border-top border-2 d-flex justify-content-around align-items-center py-3">
                  <div>
                    <HiUserGroup className="icon" /> <span>{item.user}</span>
                  </div>
                  <div>
                    <FaComment className="icon" /> <span>{item.comment}</span>
                  </div>
                  <div>
                    <span>{item.reviews} Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseCard;
