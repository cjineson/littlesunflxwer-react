// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Sunflower Hair Clips",
    category: "Hair Clips",
    price: 6,
    description:
      "Pair of Sunflower Hair Clips",
    popular: true,
    imageUrls: [
      "/images/clips_4.jpg",
      "/images/clips_7.jpg"
    ]
  },
  {
    id: 2,
    name: "Daisy Hair Clips",
    category: "Hair Clips",
    price: 6,
    description:
      "Pair of Daisy Hair Clips",
    popular: true,
    imageUrls: [
      "/images/clips_3.jpg"
    ]
  },
  {
    id: 3,
    name: "Daffodil Hair Clips",
    category: "Hair Clips",
    price: 6,
    description:
      "Pair of Daffodil Hair Clips",
    popular: true,
    imageUrls: [
      "/images/clips_5.jpg"
    ]
  },
{
  id: 4,
  name: "Rainbow Flower Hair Clips",
  category: "Hair Clips",
  price: 6,
  description:
    "Pair of Rainbow Flower Hair Clips",
  popular: true,
  imageUrls: [
    "/images/clips_8.jpg"
  ]
},
{
  id: 5,
  name: "Poppy Hair Clips",
  category: "Hair Clips",
  price: 6,
  description:
    "Pair of Poppy Flower Hair Clips",
  popular: true,
  imageUrls: [
    "/images/clips_9.jpg"
  ]
},
{
  id: 6,
  name: "Gerbera Hair Clips",
  category: "Hair Clips",
  price: 6,
  description:
    "Pair of Gerbera Hair Clips",
  popular: true,
  imageUrls: [
    "/images/clips_10.jpg",
    "/images/clips_11.jpg"
  ]
},
{
    id: 7,
    name: "Blanket",
    category: "Blankets",
    price: 30,
    description:
      "Hand crocheted blanket, available in various colours, please ask for custom orders!",

    popular: true,
    imageUrls: [
      "/images/blanket_1.jpg"
    ]
  },
  {
    id: 8,
    name: "Backpack",
    category: "Bags",
    price: 20,
    popular: true,
    imageUrls: [
     "/images/bag_1.jpg"
    ]
  },
  {
    id: 9,
    name: "Pouch",
    category: "Bags",
    price: 15,
    popular: true,
    imageUrls: [
     "/images/bag_3.jpg",
     "/images/bag_4.jpg",
     "/images/bag_5.jpg"
    ]
  },
  {
    id: 10,
    name: "Sunflower Hat",
    category: "Hats",
    price: 15,
    popular: true,
    imageUrls: [
      "/images/hat_4.jpg"
    ]
  },
  {
    id: 11,
    name: "Swirl Hat",
    category: "Hats",
    price: 15,
    popular: true,
    imageUrls: [
      "/images/hat_6.jpg"
    ]
  },  
  {
    id: 12,
    name: "Daisy Hat",
    category: "Hats",
    price: 15,
    popular: true,
    imageUrls: [
      "/images/hat_3.jpg"
    ]
  },
  {
    id: 13,
    name: "Heart Hat",
    category: "Hats",
    price: 15,
    popular: true,
    imageUrls: [
      "/images/hat_5.jpg"
    ]
  },
  {
    id: 14,
    name: "Strawberry Bandana",
    category: "Hats",
    price: 8,
    popular: true,
    imageUrls: [
      "/images/hat_7.jpg",
      "/images/hat_8.jpg",
      "/images/hat_9.jpg"
    ]
  },
  {
    id: 15,
    name: "Sunflower Earrings",
    category: "Earrings",
    price: 8,
    popular: true,
    imageUrls: [
     "/images/earring_4.jpg",
      "/images/earring_1.jpg"
    ]
  },
  {
    id: 16,
    name: "Daisy Earrings",
    category: "Earrings",
    price: 8,
    popular: true,
    imageUrls: [
      "/images/earring_6.jpg",
      "/images/earring_2.jpg"
    ]
  },
  {
    id: 17,
    name: "Sunshine Earrings",
    category: "Earrings",
    price: 8,
    popular: true,
    imageUrls: [
      "/images/earring_5.jpg"
    ]
  },
  {
    id: 18,
    name: "PomPom Earrings",
    category: "Earrings",
    price: 6,
    popular: true,
    imageUrls: [
      "/images/earring_7.jpg",
      "/images/earring_8.jpg"
    ]
  },
];

// List of item categories.
const categories = [
  {
    name: "Hair Clips",
    imageUrl: "/images/clips_1.jpg",
    desc: "Hand-made crocheted hair clips in a variety of styles and colours - Lots of flower styles & custom colours available!",
    icon: "group"
  },  
  {
    name: "Earrings",
    imageUrl: "/images/earring_3.jpg",
    desc: "Hand-made crocheted earrings in a range of colours",
    icon: "group"
  },
  {
    name: "Hats",
    imageUrl: "/images/bag_hat_1.jpg",
    desc: "Hand-made crocheted hats in a range of colours and styles",
    icon: "group"
  },
  {
    name: "Bags",
    imageUrl:  "/images/bag_1.jpg",
    desc: "Hand-made crocheted backpacks - Lots of flower styles & custom colours available!",
    icon: "group"
  },
  {
    name: "Blankets",
    imageUrl: "/images/blanket_1.jpg",
    desc: "Hand-made crocheted blankets in a variety of styles and sizes",
    icon: "group"
  },
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home", url: "/", icon: "home", id: 0 },
  {
    name: "Products",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  },

];


export { sampleProducts, categories, dataForTheMenu };
