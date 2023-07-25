import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.css';
import { BiSearch } from 'react-icons/bi';
import { BiLink } from 'react-icons/bi';
import { useGallery } from '../../../hooks/useGallery';

const GalleryCard = () => {
  const { menu } = useGallery();
  return (
    <div class="row GalleryCard justify-content-center   ">
      {menu.map((item) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 m-0 p-0" key={item.id}>
            <div className="single-card   ">
              <img src={item.img} className="img-fluid w-100 " alt="img" />
              <div className="link text-center d-flex justify-content-center align-items-center flex-column">
                <h4 className="text-white border-bottom d-inline pb-2">
                  Web Development
                </h4>
                <div className="btns d-flex justify-content-center gap-2">
                  <button className="rounded-circle">
                    <BiSearch />
                  </button>
                  <button className="rounded-circle">
                    <Link to="#">
                      <BiLink />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryCard;
