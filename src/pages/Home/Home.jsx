import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeFeature from '../../components/HomeFeature/HomeFeature';
import HomeCampus from '../../components/HomeCampus/HomeCampus';
import HomeDepartMent from '../../components/HomeDepartment/HomeDepartMent';
import FeatureCourse from '../../components/FeatureCourse/FeatureCourse';
import HomeWorld from '../../components/HomWorld/HomeWorld';
import HomeTeacher from '../../components/HomeTeacher/HomeTeacher';
import HomeStudent from '../../components/HomeStudent/HomeStudent';

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <HomeFeature />
      <HomeCampus />
      <HomeDepartMent />
      <FeatureCourse />
      <HomeWorld />
      <HomeTeacher />
      <HomeStudent />
    </main>
  );
};

export default Home;
