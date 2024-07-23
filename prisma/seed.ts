import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProjects() {
  return [
    {
      id: 'a2b3c4d',
      title: 'Jewelry Shop',
      paragrapgh1: 'The Jewelry Shop project is a sophisticated web application designed for buying and managing jewelry items online.',
      paragrapgh2: '',
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
      paragrapgh1: 'Pizzeria website offers a comprehensive and user-friendly platform for ordering pizzas and other delicious products. ',
      paragrapgh2: 'Menu Display: The menu displays a list of available products, each with a detailed description and ordering options.',
      mainImg:     'pizza-main.jpg',
      gallery:     ''
    },
    {
      id: '7p8q9r0s',
      title: 'Music Service',
      paragrapgh1: '',
      paragrapgh2: 'Dynamic Data Handling: Utilizes JSON-Server to simulate a backend, dynamically loading song data and preparing for future features like user registration and song uploads.',
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