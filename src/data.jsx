import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Luka',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Stefanovic',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Switzerland, Serbia',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: '8048 Zürich',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+41763434162',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'contact@luka.com',
  },

  {
    id: 9,
    title: 'Discord : ',
    description: 'curiosoofficial#2913',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'German, English, Serbian, (French)',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '22+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '13+',
    title: ' Completed <br /> Bootcamp Projects',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Courier <span> Veneziana </span>',
    desc: 'Currently working as a courier at Veneziana, ensuring timely and efficient delivery services.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'Courier <span> Dominos Pizza </span>',
    desc: 'Contributed to the delivery team at Dominos Pizza in 2022, ensuring prompt and accurate deliveries.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'Freelance <span> Fiverr </span>',
    desc: 'Provided freelance services on Fiverr, offering expertise in Music and Graphic design projects and tasks.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - PRESENT',
    title: 'Coding Bootcamp <span> Developer Akademie </span>',
    desc: 'Currently enrolled in the Developer Akademie Coding Bootcamp, expanding skills in web development.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2021',
    title: 'High School <span> Stiftung Mittelschule Dr. Buchmann </span>',
    desc: 'Attended Stiftung Mittelschule Dr. Buchmann for six years, building a strong academic foundation.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009 - 2015',
    title: 'Primary School <span> Dachslern </span>',
    desc: 'Started the educational journey at Dachslern Primary School, laying the groundwork for future learning.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '95',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '95',
  },

  {
    id: 4,
    title: 'ReactJS',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Bootstrap',
    percentage: '95',
  },

  {
    id: 7,
    title: 'Tailwind',
    percentage: '80',
  },

  {
    id: 8,
    title: 'Typescript',
    percentage: '80',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Snapgram',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Snapgram',
      },
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'Fullstack Social Media App',
      },
      {
        icon: <FaCode />,
        title: 'Techstack : ',
        desc: 'React, Typescript, Tailwind CSS, Appwrite baas',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'El Pollo Loco',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'El Pollo Loco',
      },
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: '2D Platformer Game',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Join',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Join',
      },
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'Task App',
      },
      {
        icon: <FaCode />,
        title: 'Techstack : ',
        desc: 'Html, CSS, Javascript, Developer Akademie Backend',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Quiz App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Quiz App',
      },
      {
        icon: <FiUser />,
        title: 'Desc : ',
        desc: 'Simple Quiz App',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Bootstrap CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
