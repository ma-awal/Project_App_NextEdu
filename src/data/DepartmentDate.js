import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/icon_01.png';
import img2 from '../assets/icon_02.png';
import img3 from '../assets/icon_03.png';
import img4 from '../assets/icon_04.png';
import img5 from '../assets/icon_05.png';
import img6 from '../assets/icon_06.png';
const DepartmentData = [
  {
    id: uuidv4(),
    icon: img1,
    title: 'Computer Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: uuidv4(),
    icon: img2,
    title: 'Microbio Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: uuidv4(),
    icon: img3,
    title: 'Electrical Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: uuidv4(),
    icon: img4,
    title: 'Civil Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: uuidv4(),
    icon: img5,
    title: 'Textile Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
  {
    id: uuidv4(),
    icon: img6,
    title: 'Biomedical Engineering',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.',
  },
];

export default DepartmentData;
