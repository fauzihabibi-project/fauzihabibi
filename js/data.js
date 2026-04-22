const USER_DATA = {
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
  ],
  projects: [
    {
      id: '1',
      title: 'Belajarcoding.id',
      description: 'A basic landing page is a simple, responsive layout built with HTML, CSS, and JavaScript. It presents key information clearly and adapts smoothly to all screen sizes for a user-friendly experience.',
      image: 'img/project1.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/basic.git'
    },
    {
      id: '2',
      title: 'Acme Rockets',
      description: 'A basic Tailwind CSS landing page uses utility classes to create a clean, and website with responsive design that automatically adapts to the user’s device theme for a seamless experience.',
      image: 'img/project2.png',
      tags: ['Tailwind CSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/tailwindcss-project.git'
    },
    {
      id: '3',
      title: 'Laracamp',
      description: 'An e-learning landing page built with Bootstrap offers a clean and responsive layout that showcases courses and learning features. It adapts smoothly to all screen sizes, providing a simple and user-friendly experience.',
      image: 'img/project3.png',
      tags: ['Bootstrap', 'SCSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/laracamp.git'
    },
    {
      id: '4',
      title: 'Organic',
      description: 'This food e-commerce landing page built with Bootstrap offers a clean, responsive layout for showcasing products, promotions, and ordering features. Responsive, it provides a smooth and user-friendly experience.',
      image: 'img/project4.png',
      tags: ['Bootstrap', 'SCSS'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/E-commerce.git'
    },
    {
      id: '5',
      title: 'Pengaduan App',
      description: 'A public complaint system built with Laravel, Livewire, and MySQL allows users to submit and track reports in real time with secure processing and efficient data management features.',
      image: 'img/project5.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/project-website-e-report-muhammadfauzihabibi-250458302049.git'
    },
    {
      id: '6',
      title: 'Creative computer',
      description: 'An e-commerce platform built with Laravel and Livewire provides real-time interactions, secure transactions, and complete features like product browsing, cart, checkout, and admin product management.',
      image: 'img/project6.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/e-commerce-muhammad-fauzi-habibi-250458302049.git'
    },
    {
      id: '7',
      title: 'Survey App',
      description: 'An employee satisfaction survey application that helps companies improve service quality through direct customer assessments.',
      image: 'img/project7.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/survey.git'
    },
    {
      id: '8',
      title: 'Drone Underwater',
      description: 'An underwater drone that can be controlled remotely and can be used for various purposes such as exploration, research, and education.',
      image: 'img/project8.png',
      tags: ['ESP32', 'C++', 'Html', 'Css', 'Js'],
      link: '#',
      github: 'https://github.com/fauzihabibi-project/droneunderwater.git'
    },
    {
      id: '9',
      title: 'Money Track',
      description: 'A modern financial recording system that helps you effectively monitor every transaction. Understand your spending patterns in real time.',
      image: 'img/project9.png',
      tags: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
      github: '#'
    }
  ],
  certificates: [
    {
      id: '1',
      title: 'Web Development',
      issuer: 'Sololearn',
      image: 'img/sertifikat1.png',
      description: 'Available at Sololearn on Wednesday, November 19, 2025.'
    },
    {
      id: '2',
      title: 'Php With MySql',
      issuer: 'Udemy',
      image: 'img/sertifikat2.png',
      description: 'Available at Udemy on Monday, November 17, 2025.'
    },
    {
      id: '3',
      title: 'Html Css Websites',
      issuer: 'Udemy',
      image: 'img/sertifikat3.png',
      description: 'Available at Udemy on Saturday, November 15, 2025.'
    },
    {
      id: '4',
      title: 'Management Project',
      issuer: 'Dicoding',
      image: 'img/sertifikat4.png',
      description: 'Available at Dicoding on Thursday, November 13, 2025.'
    },
    {
      id: '5',
      title: 'AI base',
      issuer: 'Dicoding',
      image: 'img/sertifikat5.png',
      description: 'Available at Dicoding on Tuesday, November 4, 2025.'
    }
  ],
  socials: [
    { 
      name: 'Github', 
      url: 'https://github.com/muhammadfauzihabibi', 
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 relative z-10"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>' 
    },
    { 
      name: 'Linkedin', 
      url: 'https://www.linkedin.com/in/muhammad-fauzi-habibi-200793371', 
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 relative z-10"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/fauzihabibi_/', 
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 relative z-10"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' 
    },
    { 
      name: 'Email', 
      url: 'mailto:habibi.muhammad.fauzi@gmail.com', 
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 relative z-10"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' 
    },
  ]
};
