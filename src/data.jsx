import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';


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
];

export const projects = [
  {
    id: nanoid(),
    img:'Gallery.png',
    url: 'https://gallery-project-ten.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Gallery project',
    
  },
  {
    id: nanoid(),
    img: 'Mixmaster.png',
    url: 'https://mixmaster-project.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Mixmaster(reactQuery + reactRouter) project',
    text: 'A dynamic web application utilizing React Query for efficient data fetching and caching, combined with React Router to implement seamless navigation and multiple pages. This project features a search functionality for enhanced user interaction and single-product pages, delivering a smooth and responsive browsing experience.',
  },
  {
    id: nanoid(),
    img: 'Cart.png',
    url: 'https://cart-project-gamma.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Cart(UseReducer) project',
    text: 'A streamlined cart page application built with useReducer, designed to manage product quantities and calculate total costs dynamically. This project showcases state management with minimal dependencies for an efficient and functional user experience.',
  },
  {
    id: nanoid(),
    img: 'Cart.png',
    url: 'https://redux-toolkit-wheat-five.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Cart(ReduxToolkit) project',
    text: 'A dynamic shopping cart application built with React and Redux Toolkit. It features seamless state management for adding, removing, and updating items, real-time total calculations, and efficient API integration to fetch product data. This project demonstrates the power of Redux for managing complex app states while keeping the code clean and maintainable.',
  },
  {
    id: nanoid(),
    img: 'Cms.png',
    url: 'https://cms-project-eight.vercel.app/',
    github: 'https://github.com/Morningstar0000',
    title: 'Headless CMS project',
    text: 'A modern front-end application powered by React, seamlessly integrated with a third-party headless CMS platform. This project emphasizes flexibility and scalability, enabling efficient content management and dynamic rendering on the web.',
  },
];