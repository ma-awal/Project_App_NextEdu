import { v4 as uuiv4 } from 'uuid';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import t1 from '../assets/teacher_02.jpg';
import t2 from '../assets/teacher_03.jpg';
import t3 from '../assets/teacher_04.jpg';
import t4 from '../assets/teacher_05.jpg';
import t5 from '../assets/teacher_06.jpg';
import t6 from '../assets/teacher_07.jpg';
const TeacherData = [
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'CEO & Founder',
    img: t1,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Manager&Director',
    img: t2,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Assitant Teacher',
    img: t3,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Assitant Teacher',
    img: t4,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Assitant Teacher',
    img: t5,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
  {
    id: uuiv4(),
    name: 'Lueis Lucaus',
    title: 'Assitant Teacher',
    img: t6,
    links: [
      { icon: <FaFacebook />, url: 'http//:www.facebook.com' },
      { icon: <FaTwitter />, url: 'http//:www.twitter.com' },
      { icon: <FaInstagram />, url: 'http//:www.instagram.com' },
    ],
  },
];

export default TeacherData;
