import { v4 as uuidv4 } from 'uuid';

import c1 from '../assets/featured_07.jpg';
import c2 from '../assets/featured_08.jpg';
import c3 from '../assets/featured_09.jpg';
import c4 from '../assets/portfolio_01.jpg';
import c5 from '../assets/portfolio_02.jpg';
import c6 from '../assets/portfolio_03.jpg';
import c7 from '../assets/portfolio_07.jpg';
import c8 from '../assets/portfolio_05.jpg';
import c9 from '../assets/featured_06.jpg';
const GalleryData = [
  {
    id: uuidv4(),
    img: c1,
    price: 85,
    title: 'Web Development',
    desc: 'Praesent venenatis metus vel iaculis consequat. Pellentesque in est ac diam suscipit consectetur. Aenean vitae nisi nec.',
    user: 12,
    comment: 23,
    reviews: 15,
    category: 'web design',
  },
  {
    id: uuidv4(),
    img: c2,
    price: 50,
    title: 'Ux Design',
    desc: 'Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque quis lorem.',
    user: 8,
    comment: 17,
    reviews: 12,
    category: 'web design',
  },
  {
    id: uuidv4(),
    img: c3,
    price: 120,
    title: 'Web Design',
    desc: 'Praesent venenatis metus vel iaculis consequat. Pellentesque in est ac diam suscipit consectetur. Aenean vitae nisi nec.',
    user: 19,
    comment: 31,
    reviews: 28,
    category: 'web design',
  },
  {
    id: uuidv4(),
    img: c4,
    price: 30,
    title: 'Graphic Design',
    desc: 'Vivamus non leo nec magna interdum malesuada. Maecenas iaculis elit quis magna congue, sit amet venenatis justo sodales.',
    user: 6,
    comment: 12,
    reviews: 9,
    category: 'ui design',
  },
  {
    id: uuidv4(),
    img: c5,
    price: 70,
    title: 'App Development',
    desc: 'Suspendisse in malesuada sapien. Sed euismod nisi ut semper hendrerit. Sed vel odio in ante cursus tincidunt sit amet vitae.',
    user: 15,
    comment: 27,
    reviews: 20,
    category: 'ui design',
  },
  {
    id: uuidv4(),
    img: c6,
    price: 40,
    title: 'Complete Photography',
    desc: 'Donec nec augue id turpis ultricies consectetur vel at arcu. Cras convallis mauris sit amet sem luctus ultrices.',
    user: 9,
    comment: 18,
    reviews: 14,
    category: 'ui design',
  },
  {
    id: uuidv4(),
    img: c7,
    price: 95,
    title: 'Print Design',
    desc: 'Fusce accumsan lobortis odio, in lacinia nisi ultrices eu. In ut felis nec sapien malesuada hendrerit et eget mauris.',
    user: 21,
    comment: 34,
    reviews: 22,
    category: 'business',
  },
  {
    id: uuidv4(),
    img: c8,
    price: 55,
    title: 'UI Design',
    desc: 'Integer sit amet urna vel purus porttitor feugiat. Sed et magna nec tortor scelerisque consectetur eget eu velit.',
    user: 11,
    comment: 14,
    reviews: 10,
    category: 'business',
  },
  {
    id: uuidv4(),
    img: c9,
    price: 25,
    title: 'Mastering Of Java',
    desc: 'Curabitur suscipit ligula eu mi luctus malesuada. Vestibulum vehicula accumsan sem, et semper metus posuere eget.',
    user: 7,
    comment: 9,
    reviews: 6,
    category: 'business',
  },
];
export default GalleryData;
