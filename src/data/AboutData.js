import { v4 as uuidv4 } from 'uuid';
import a1 from '../assets/service_icon_07.png';
import a2 from '../assets/service_icon_01.png';
import b1 from '../assets/service_icon_01.png';
import b2 from '../assets/service_icon_02.png';
import b3 from '../assets/service_icon_03.png';
import a3 from '../assets/service_icon_08.png';

const AboutData = [
  {
    id: uuidv4(),
    img: a1,
    img2: b2,
    heading: 'Scholarship Facility',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed .',
  },
  {
    id: uuidv4(),
    img: a2,
    img2: b1,
    heading: 'Skilled Lecturers',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed .',
  },
  {
    id: uuidv4(),
    img: a3,
    img2: b3,
    heading: 'Skilled Lecturers',
    text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed .',
  },
];

export default AboutData;
