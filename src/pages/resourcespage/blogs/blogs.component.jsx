import React from 'react';
import { HeaderHalf } from '../../../components/essentials/header/header-half-resources.component';
import { OverlapWithFilter } from '../../../components/essentials/overlap-box/overlap-with-filters/overlap-with-filters.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import './blogs.styles.scss';
import kyc_img from '../../../assest/19 - Resources - Blog/kyc-1-400x250-394x250.png';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';

export const Blogs = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='The Trusted Identity Blog' uris='blogs' />
    <OverlapWithFilter>
      <div className='grid-for-blogs'>
        <BlogCard
          title='Slipping The Masks of True 
          Identify – Authentication and 
          Validation'
          img={kyc_img}
          author='author'
          date='december 19, 2020'
          article='The banks and financial institutions are spending around $1 billion on identity management solutions,” stated an industry report. These solutions are high in demand because money laundering … Read More'
        />
      </div>
    </OverlapWithFilter>
    <Footer />
  </div>
);

const BlogCard = ({ title, img, author, date, article }) => {
  return (
    <div className='blog-div'>
      <img src={img} alt='anImg' className='img-for-blog' />
      <p className='blog-title'>{title}</p>
      <p className='dateAndAuth'>
        <span className='dateField'>{date}</span> |
        <span className='author-field'>posted By {author}</span>
      </p>
      <p className='article'>{article}</p>
      <button className='btn-blog'>View Blog</button>
    </div>
  );
};
