const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors())

const products = [
  {
    id: 1,
    title: "Kuromi Plush",
    description: "Plush of Kuromi, leader of a biker gang known as \"Kuromi\'s 5\".",
    price: [47.95, 59.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Kuromi-Plush-_Standard_-M-Japan-Figure-4550337050316-0_592x592.jpg?v=1634268901',
    likes: 0,
    publicationDate: new Date(2023, 3, 16),
    isLiked: false,
    size: ['Medium', 'Big']
  },
  {
    id: 2,
    title: "Hello Kitty Plush",
    description: "Plush of Hello kitty, also known as \"Kitty White\".",
    price: [32.95, 44.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Hello-Kitty-Plush-Toy-_Standard_-S-Japan-Figure-4901610504161-0_592x592.jpg?v=1634268404',
    likes: 0,
    publicationDate: new Date(2023, 3, 17),
    isLiked: false,
    size: ['Medium', 'Big']
  },
  {
    id: 3,
    title: "Cinnamoroll Plush (Just Chillin' Series)",
    description: "With all the hurry in the world, sometimes it’s nice to relax and chill. Grab a quiet spot and your favorite Sanrio friend for a moment of zen, perhaps even doze off for a catnap.",
    price: [44.00],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/zz-2210640590_CN_--1_800x.jpg?v=1673404884',
    likes: 0,
    publicationDate: new Date(2023, 3, 18),
    isLiked: false,
    size: ['Medium']
  },
  {
    id: 4,
    title: "Keroppi Plush",
    description: "Keroppi is full of energy! He loves adventure and is good at singing and swimming. He lives with his friends and family at Donut Pond.",
    price: [32.00],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/618853-Zoom.1_800x.jpg?v=1664384425',
    likes: 0,
    publicationDate: new Date(2023, 4, 5),
    isLiked: false,
    size: ['Medium']
  },
  {
    id: 5,
    title: "LittleTwinStars Kiki Soft Mascot Plush",
    description: "Kiki and Lala are two twin stars born on Omoiyari Star in the Yume Star-Cloud. They traveled a long way to Earth to learn how to be the best, shiniest stars they can be. Kiki is filled with curiosity about everything, which makes him a little cheeky sometimes.",
    price: [6.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/243973-Zoom.1_800x.jpg?v=1668736823',
    likes: 0,
    publicationDate: new Date(2023, 4, 6),
    isLiked: false,
    size: ['Small']
  },
  {
    id: 6,
    title: "LittleTwinStars Lala Soft Mascot Plush",
    description: "Kiki and Lala are two twin stars born on Omoiyari Star in the Yume Star-Cloud. They traveled a long way to Earth to learn how to be the best, shiniest stars they can be. Lala is the eldest, loves to draw and write poems, and is a great cook!",
    price: [6.99],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/244007-Zoom.1_800x.jpg?v=1668736833',
    likes: 0,
    publicationDate: new Date(2023, 4, 6),
    isLiked: false,
    size: ['Small']
  },
  {
    id: 7,
    title: "Kuromi Sweet Lolita Plush",
    description: "Ribbons, ruffles and lace! Kawaii style in full swing with a little side of mischief! Kuromi shows off her best Lolita wear featuring a little sparkle in her eyes and glimmer on her signature bow!",
    price: [19.99, 28.00],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/635472-Zoom.1_800x.jpg?v=1673983249',
    likes: 0,
    publicationDate: new Date(2023, 4, 9),
    isLiked: false,
    size: ['Small', 'Medium']
  },
  {
    id: 8,
    title: "Badtz-maru Plush",
    description: "Badtz-maru is one mischievous little penguin. He lives with his mother and pinball playing father in Gorgeoustown. Badtz-maru attracts lots of attention as he walks his pet alligator, Pochi.",
    price: [32.00],
    imageUrl: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/products/618861-Zoom.1_800x.jpg?v=1664384434',
    likes: 0,
    publicationDate: new Date(2023, 4, 10),
    isLiked: false,
    size: ['Medium']
  }
]

app.get('/products', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products)
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  res.set('Access-Control-Allow-Origin', '*');
  res.json(products.find((p) => p.id === id))
});

app.put('/products/:id/likes', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let product = products.find((p) => p.id === id);
  if (product.isLiked) {
    product.likes--;
  } else {
    product.likes++;
  }
  product.isLiked = !product.isLiked;

  res.set('Access-Control-Allow-Origin', '*');
  res.json(product)
})

app.listen(port, () => {
  console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});
