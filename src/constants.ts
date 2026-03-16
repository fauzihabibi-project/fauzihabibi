import { Github, Linkedin, Mail, Twitter, Instagram, Globe } from 'lucide-react';

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work';
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  description: string;
}

export const USER_DATA = {
  name: "Muhammad Fauzi Habibi",
  role: "Fullstack Developer & UI/UX Designer",
  bio: "I am a passionate developer with a strong focus on creating clean, efficient, and user-friendly web applications. With expertise in modern technologies like React, Node.js, and Tailwind CSS, I strive to build digital experiences that make an impact.",
  email: "habibi.muhammad.fauzi@gmail.com",
  photo: "src/img/fauzi.jpg",
  socials: [
    { name: 'Github', url: 'https://github.com/muhammadfauzihabibi', icon: Github },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/muhammad-fauzi-habibi-200793371', icon: Linkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/fauzihabibi_/', icon: Instagram },
    { name: 'Email', url: 'mailto:habibi.muhammad.fauzi@gmail.com', icon: Mail },
  ],
  timeline: [
    {
      id: '1',
      title: 'Senior Software Engineering Student',
      organization: 'Politeknik IDN Bogor',
      period: '2025 - Present',
      description: 'learn more about software engineering',
      type: 'education'
    },
    {
      id: '2',
      title: 'Fullstack Developer',
      organization: 'SMK Dar El-Ilmi',
      period: '2023 - 2025',
      description: 'Develop and maintain personal projects ranging from frontend, backend, and api for mobile apps',
      type: 'experience'
    },
    {
      id: '3',
      title: "Software Engineering Student",
      organization: 'Ma\'had Dar El-Ilmi',
      period: '2022 - 2025',
      description: 'graduated from school majoring in high school programming',
      type: 'education'
    }
  ] as TimelineItem[],
  skills: [
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'java script', icon: 'https://cdn.simpleicons.org/javascript/FFD700' },
    { name: 'Html', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'css', icon: 'https://cdn.simpleicons.org/css/1572B6' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'php', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/777BB4' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0075BA' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/0075BA' },
  ] as Skill[],
  projects: [
    {
      id: '1',
      title: 'Belajarcoding.id',
      description: 'A basic landing page is a simple, responsive layout built with HTML, CSS, and JavaScript. It presents key information clearly and adapts smoothly to all screen sizes for a user-friendly experience.',
      image: 'src/img/project1.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/basic.git'
    },
    {
      id: '2',
      title: 'Acme Rockets',
      description: 'A basic Tailwind CSS landing page uses utility classes to create a clean, and website with responsive design that automatically adapts to the user’s device theme for a seamless experience.',
      image: 'src/img/project2.png',
      tags: ['Tailwind CSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/tailwindcss-project.git'
    },
    {
      id: '3',
      title: 'Laracamp',
      description: 'An e-learning landing page built with Bootstrap offers a clean and responsive layout that showcases courses and learning features. It adapts smoothly to all screen sizes, providing a simple and user-friendly experience.',
      image: 'src/img/project3.png',
      tags: ['Bootstrap', 'SCSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/laracamp.git'
    },
    {
      id: '4',
      title: 'Organic',
      description: 'This food e-commerce landing page built with Bootstrap offers a clean, responsive layout for showcasing products, promotions, and ordering features. Responsive, it provides a smooth and user-friendly experience.',
      image: 'src/img/project4.png',
      tags: ['Bootstrap', 'SCSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/E-commerce.git'
    },
    {
      id: '5',
      title: 'Pengaduan App',
      description: 'A public complaint system built with Laravel, Livewire, and MySQL allows users to submit and track reports in real time with secure processing and efficient data management features.',
      image: 'src/img/project5.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/project-website-e-report-muhammadfauzihabibi-250458302049.git'
    },
    {
      id: '6',
      title: 'Creative computer',
      description: 'An e-commerce platform built with Laravel and Livewire provides real-time interactions, secure transactions, and complete features like product browsing, cart, checkout, and admin product management.',
      image: 'src/img/project6.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/e-commerce-muhammad-fauzi-habibi-250458302049.git'
    },
    {
      id: '7',
      title: 'Survey App',
      description: 'An employee satisfaction survey application that helps companies improve service quality through direct customer assessments.',
      image: 'src/img/project7.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/survey.git'
    }
  ] as Project[],
  certificates: [
    {
      id: '1',
      title: 'Web Development',
      issuer: 'Sololearn',
      image: 'src/img/sertifikat1.png',
      description: 'Available at Sololearn on Wednesday, November 19, 2025.'
    },
    {
      id: '2',
      title: 'Php With MySql',
      issuer: 'Udemy',
      image: 'src/img/sertifikat2.png',
      description: 'Available at Udemy on Monday, November 17, 2025.'
    },
    {
      id: '3',
      title: 'Html Css Websites',
      issuer: 'Udemy',
      image: 'src/img/sertifikat3.png',
      description: 'Available at Udemy on Saturday, November 15, 2025.'
    },
    {
      id: '4',
      title: 'Management Project',
      issuer: 'Dicoding',
      image: 'src/img/sertifikat4.png',
      description: 'Available at Dicoding on Thursday, November 13, 2025.'
    },
    {
      id: '5',
      title: 'AI base',
      issuer: 'Dicoding',
      image: 'src/img/sertifikat5.png',
      description: 'Available at Dicoding on Tuesday, November 4, 2025.'
    }
  ] as Certificate[]
};
