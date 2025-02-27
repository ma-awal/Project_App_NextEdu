import { v4 as uuidv4 } from 'uuid';
const FooterData = [
  {
    links: [
      { name: 'Computer' },
      { name: 'Electrical' },
      { name: 'Textile' },
      { name: 'Civil' },
      { name: 'Biomedical' },
    ],
  },
  {
    links: [
      { id: uuidv4(), name: 'About  ', path: '/about' },
      { id: uuidv4(), name: 'Contact ', path: '/contact' },
      { id: uuidv4(), name: 'Department', path: '/department' },
      { id: uuidv4(), name: 'Gallery', path: '/gallery' },
      { id: uuidv4(), name: 'Notice', path: '/notice' },
    ],
  },
];

export default FooterData;
