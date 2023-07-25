import React from 'react';
import TeacherCard from '../TeacherCard/TeacherCard';
import TeacherData from '../../data/TeacherData';
const HomeTeacher = () => {
  const NewTeacher = TeacherData.slice(0, 4);
  return (
    <section className="H-Teacher py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="H-head mb-3 mb-md-4    ">
          <h5>Our teacher</h5>
          <h2>Best Certified Faculty</h2>
        </div>
        <TeacherCard data={NewTeacher} />
      </div>
    </section>
  );
};

export default HomeTeacher;
