import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import SearchResult from '../../components/SearchResult/SearchResult';
const Result = () => {
  return (
    <main>
      <PropCard name={'Result'} link={'Home'} />
      <section className="py-3 py-md-4 py-lg-5 ">
        <div className="container">
          <SearchResult />
        </div>
      </section>
    </main>
  );
};

export default Result;
