import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import AboutCard from '../../components/AboutCard/AboutCard';
import AboutData from '../../data/AboutData';
import AboutCount from '../../components/AboutCount/AboutCount';
import AboutChooseData from '../../data/AboutChooseData';
import AboutChoose from '../../components/AboutChoose/AboutChoose';
import AboutInstructor from '../../components/AboutInstructor/AboutInstructor';
import AboutInstructorData from '../../data/AboutInstructorData';
import AboutStudentData from '../../data/AboutStudentData';
import AboutStudent from '../../components/AboutStudent/AboutStudent';
const About = () => {
  return (
    <>
      <PropCard name={'About us'} link={'Home'} />
      <AboutCard data={AboutData} logic={'true'} />
      <AboutCount />
      <AboutChoose data={AboutChooseData} />
      <AboutInstructor data={AboutInstructorData} />
      <AboutStudent data={AboutStudentData} myLogic={'true'} />
    </>
  );
};

export default About;
