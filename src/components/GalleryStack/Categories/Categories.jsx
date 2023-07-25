import React, { useState } from 'react';
import { useGallery } from '../../../hooks/useGallery';
import './Categories.css';
const Categories = () => {
  const { categories, filteredItems } = useGallery();
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
    filteredItems(categories[index]);
  };
  return (
    <>
      <div className="col-12 col-lg-6 mx-auto Categories py-2   ">
        <p className="text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          quis eros lobortis, vestibulum turpis ac, pulvinar odio. Praesent
          vulputate a elit ac mollis. In sit amet ipsum turpis. Pellentesque
          venenatis, libero vel euismod lobortis.
        </p>
        <div className=" box d-flex justify-content-center align-items-center mb-3 mb-lg-5  flex-wrap ">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`text-uppercase rounded-0 btn ${
                  active === index ? 'active' : ''
                }`}
                onClick={() => handleActive(index)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
