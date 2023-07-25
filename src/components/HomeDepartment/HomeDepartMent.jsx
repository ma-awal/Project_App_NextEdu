import React from 'react';

import './H-department.css';
import DepartmentData from '../../data/DepartmentDate';
import DepartmentCard from '../DepartmentCard/DepartmentCard';
const HomeDepartMent = () => {
  return (
    <section className=" H-department py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="H-head text-center mb-3 mb-md-4 mb-lg-5  ">
          <h5>Our department</h5>
          <h2>Popular Deapartment</h2>
        </div>
        <DepartmentCard data={DepartmentData} />
      </div>
    </section>
  );
};

export default HomeDepartMent;
