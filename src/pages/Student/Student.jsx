import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import StudentCard from '../../components/StudentCard/StudentCard';
import StudentData from '../../data/StudentData';
const Student = () => {
  return (
    <main>
      <PropCard name={'Student List'} link={'Home'} />
      <section className="py-3 py-m-4 my-3 my-md-4 my-lg-5">
        <div className="container">
          <StudentCard data={StudentData} />
        </div>
      </section>
    </main>
  );
};

export default Student;
