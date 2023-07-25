import React from 'react';
import './Department.css';
import DepartmentData from '../../data/DepartmentDate';
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard';
import PropCard from '../../components/PropCard/PropCard';

const Department = () => {
  return (
    <main>
      <PropCard name={'Department'} link={'Home'} />
      <section className="Department py-3 py-md-4  my-3 my-md-4 my-lg-5">
        <div className="container">
          <DepartmentCard data={DepartmentData} myLogic={'true'} />
        </div>
      </section>
    </main>
  );
};

export default Department;
