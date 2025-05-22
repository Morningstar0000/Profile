import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRadixui } from "react-icons/si";


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'TailwindCss',
    icon: <RiTailwindCssFill className='h-16 w-16 text-emerald-500'/>,
    text: 'A utility-first CSS framework I use to create responsive, customizable user interfaces efficiently with minimal custom CSS.',
  },
   {
    id: nanoid(),
    title: 'RadixUI',
    icon: <SiRadixui className='h-16 w-16 text-emerald-500' />,
    text: 'A set of accessible, unstyled React components I leverage to build flexible, high-quality UIs with complete design control.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'Gallery.png',
    url: 'https://gallery-project-ten.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Gallery Project',
    text: 'A sleek and responsive web application that fetches high-quality images from the Unsplash API.',
    category: 'minor'
  },
  {
    id: nanoid(),
    img: 'Mixmaster.png',
    url: 'https://mixmaster-project.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Mixmaster (React Query + React Router)',
    text: 'Utilizes React Query for data fetching and React Router for seamless navigation.',
    category: 'major'
  },
  {
    id: nanoid(),
    img: 'Cart.png',
    url: 'https://cart-project-gamma.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Cart (useReducer)',
    text: 'Manages product quantities and dynamically calculates totals using useReducer.',
    category: 'minor'
  },
  {
    id: nanoid(),
    img: 'Cart.png',
    url: 'https://redux-toolkit-wheat-five.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Cart (Redux Toolkit)',
    text: 'A dynamic shopping cart using Redux Toolkit for efficient state management.',
    category: 'minor'
  },
  {
    id: nanoid(),
    img: 'Cms.png',
    url: 'https://cms-project-eight.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Headless CMS',
    text: 'A modern front-end app integrated with a headless CMS for dynamic content rendering.',
    category: 'minor'
  },
  {
    id: nanoid(),
    img: 'comfyStore.png',
    url: 'https://comfy-store-livid.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Comfy Store(Ecommerce)',
    text: 'A modern e-commerce web app featuring dynamic product listings, cart management with real-time updates, and secure user authentication using a mock API. Built with React, DaisyUI, and React Query for efficient data handling.',
    category: 'major'
  },
  {
    id: nanoid(),
    img: 'logistic.png',
    url: 'https://logistic-eta-tan.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Logistic static web(clone figma design)',
    text: 'A pixel-perfect and fully responsive web application meticulously built from a Figma design. Leveraging React.js, Tailwind CSS, and Daisy UI, this project showcases a modern and engaging landing page solution for the logistics industry, ensuring a seamless user experience across all devices.',
    category: 'minor'
  },
];
