import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProjects() {
  return [
    {
      id: 'a2b3c4d',
      title: 'Jewelry Shop',
      paragrapgh1: 'The Jewelry Shop project is a sophisticated web application designed for buying and managing jewelry items online. This e-commerce solution features a user-friendly interface, allowing customers to browse, search, and purchase jewelry with ease. The application supports secure user authentication, enabling users to register and log in/log out.',
      paragrapgh2: 'On the backend, the project employs Nest.js, providing a robust and scalable server environment, while Prisma is used for flexible and reliable data storage. The frontend is built with React, ensuring a dynamic and responsive user experience. Key functionalities of the Jewelry Shop include a real-time shopping cart, a secure checkout process, and comprehensive order management. The project leverages modern web technologies and best practices, making it a valuable resource for learning and implementing e-commerce solutions.',
      mainImg:     'jewshop_main.jpg',
      gallery:     ''
    },
    {
      id: '5e6f7g8h',
      title: 'Furniture shop',
      paragrapgh1: '',
      paragrapgh2: '',
      mainImg:     'newShop.jpg',
      gallery:     ''
    },
    {
      id: '9i0j1k2l',
      title: 'AdsBoard',
      paragrapgh1: '',
      paragrapgh2: '',
      mainImg:     'adsboard_main.jpg',
      gallery:     ''
    },
    {
      id: '1t2u3v4w',
      title: 'Pizzeria',
      paragrapgh1: 'Pizzeria website offers a comprehensive and user-friendly platform for ordering pizzas and other delicious products. The site includes a variety of functionalities to enhance the user experience and streamline the ordering process.',
      paragrapgh2: 'Menu Display: The menu displays a list of available products, each with a detailed description and ordering options.Server-Side Menu Loading: The menu list is fetched from the server after the page loads, ensuring the latest information is always displayed.',
      mainImg:     'pizza-main.jpg',
      gallery:     ''
    },
    {
      id: '9i0j1k2l',
      title: 'Music Service',
      paragrapgh1: 'The Music Service project is a conceptual web application designed to offer users a seamless and engaging experience in discovering and playing music. This project, developed as a Single Page Application (SPA), includes a Home page with a song list and subscription information, a Search page for finding specific songs, and a Discover page for recommending random tracks. ',
      paragrapgh2: 'Dynamic Data Handling: Utilizes JSON-Server to simulate a backend, dynamically loading song data and preparing for future features like user registration and song uploads. Dynamic Data Handling: Utilizes JSON-Server to simulate a backend, dynamically loading song data and preparing for future features like user registration and song uploads.',
      mainImg:     'musicservice_main.jpg',
      gallery:     ''
    },
  ]
}

async function seed() {
  await Promise.all(
    getProjects().map((project) => {
    return db.project.create({ data: project });
    }),
  );
}
seed();