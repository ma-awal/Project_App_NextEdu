import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import TeacherData from '../../data/TeacherData';
const Teacher = () => {
  return (
    <main>
      <PropCard name={'Teacher'} link={'Home'} />
      <section className="Teacher py-3 py-md-4 py-lg-5 ">
        <div className="container py-3 py-md-4 py-lg-5">
          <TeacherCard data={TeacherData} myLogic={'true'} />
        </div>
      </section>
    </main>
  );
};

export default Teacher;
