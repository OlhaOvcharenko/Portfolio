"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getProjects() {
    return [
        {
            id: 'a2b3c4d',
            title: 'Jewelry Shop',
            paragrapgh1: `The Jewelry Shop project is a sophisticated web application designed for buying and managing jewelry items online. This e-commerce solution features a user-friendly interface, allowing customers to browse, search, and purchase jewelry with ease. The application supports secure user authentication, enabling users to register, log in, and log out.`,
            paragrapgh2: `
        User Authentication: Secure user registration and login/logout functionality.
        Real-time Shopping Cart: Allows users to add, remove, and view products in real time as they shop.
        Backend with Nest.js: Provides a scalable server environment.
        Database with Prisma: Utilizes Prisma for flexible and reliable data storage.
        Frontend with React: Ensures a dynamic and responsive user experience.
        
        The project leverages modern web technologies and best practices, making it a valuable resource for learning and implementing e-commerce solutions.`,
            mainImg: 'jewshop_main.jpg',
            gallery: 'jw_img_1.jpg,jw_img_2.jpg,jw_img_3.jpg,jw_img_4.jpg'
        },
        { id: '7p8q9r0s',
            title: 'Music Service',
            paragrapgh1: `The Music Service project is a conceptual web application designed to offer users a seamless and engaging experience in discovering and playing music. Developed as a Single Page Application (SPA), it features a Home page with a song list and subscription information, a Search page for finding specific songs, and a Discover page for recommending random tracks.`,
            paragrapgh2: `
        Music Player Integration: Each song includes an embedded music player, powered by the Green Audio Player plugin, ensuring consistent playback functionality.
        Dynamic Data Handling: Utilizes JSON-Server to simulate a backend, dynamically loading song data, preparing for future features such as user registration and song uploads.
        Modular JavaScript Code: Implements a structured, class-based JavaScript approach, creating a cohesive single object (app) for clean, maintainable, and modular code.

        This project provides a well-rounded example of music streaming functionality in a modern web application, showcasing best practices for building dynamic, data-driven SPAs.`,
            mainImg: 'musicservice_main.jpg',
            gallery: ''
        },
        {
            id: '1t2u3v4w',
            title: 'Pizzeria',
            paragrapgh1: 'This project showcases my skills in full-stack development, including server-side programming, client-side scripting, dynamic content management, and responsive UI design. Pizzeria website offers a comprehensive and user-friendly platform for ordering pizzas and other delicious products.',
            paragrapgh2: `
        Menu Display: The menu displays a list of available products, each with a detailed description and ordering options.
        Customizable Options: Each product has a dropdown panel with descriptions and customizable options such as checkboxes, radio buttons, and select menus.
        Dynamic Pricing: Options selected by the user can dynamically change the price of the product.
        Dynamic Illustrations: Each product can have its illustration, which updates based on the selected options.
        Shopping Cart: Ordered products are added to a shopping cart, which shows the total price including a fixed delivery cost.`,
            mainImg: 'pizza-main.jpg',
            gallery: ''
        },
        {
            id: '5e6f7g8h',
            title: 'Furniture shop',
            paragrapgh1: '',
            paragrapgh2: '',
            mainImg: 'newShop.jpg',
            gallery: ''
        },
        {
            id: '9i0j1k2l',
            title: 'AdsBoard',
            paragrapgh1: '',
            paragrapgh2: '',
            mainImg: 'adsboard_main.jpg',
            gallery: ''
        },
    ];
}
async function seed() {
    await Promise.all(getProjects().map((project) => {
        return db.project.create({ data: project });
    }));
}
seed();
//# sourceMappingURL=seed.js.map