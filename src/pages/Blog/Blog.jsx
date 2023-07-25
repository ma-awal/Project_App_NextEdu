import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogData from '../../data/BlogData';
import BlogNews from '../../components/BlogNews/BlogNews';
import NewsData from '../../data/NewsData';
const Blog = () => {
  return (
    <main>
      <PropCard name={'Blog'} link={'Home'} />
      <section className="py-3 py-md-4 my-3 my-md-4 my-lg-5">
        <div className="container">
          <div class="row gy-3 gy-md-4 ">
            <div className="col-12 col-md-8 ">
              <BlogCard data={BlogData} />
            </div>
            <div className="col-12 col-md-4">
              <BlogNews data={NewsData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
