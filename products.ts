import image1 from "./images/img1.png";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import image5 from "./images/img5.png";

export const products = [
  {
    id: 1,
    title: "Luxury Fabric Sofa Set",
    description:
      "Experience comfort and elegance with our premium 3-piece fabric sofa set. Designed with plush cushions, hardwood frame, and neutral tones that fit any modern living room decor.",
    image: image1,
    starsCount: 4,
  },
  {
    id: 2,
    title: "Modern Wooden Dining Table",
    description:
      "A sleek, solid wood dining table crafted for family dinners and gatherings. Seats up to six people comfortably, with a scratch-resistant finish and minimalist design.",
    image: image2,
    starsCount: 3,
  },
  {
    id: 3,
    title: "Ergonomic Mesh Office Chair",
    description:
      "Stay productive with this high-back ergonomic office chair. Features include lumbar support, adjustable armrests, breathable mesh back, and a smooth-rolling base.",
    image: image3,
    starsCount: 5,
  },
  {
    id: 4,
    title: "5-Tier Wooden Bookshelf",
    description:
      "Organize your books, plants, and decor with this sturdy 5-tier bookshelf. Made from durable MDF wood, it's perfect for home offices, bedrooms, or living rooms.",
    image: image4,
    starsCount: 2,
  },
  {
    id: 5,
    title: "Glass-Top Coffee Table",
    description:
      "A stylish glass-top coffee table with a steel frame base. Perfect for showcasing magazines, candles, or beverages in your living room. Modern and space-efficient.",
    image: image5,
    starsCount: 4,
  },
];

export const categories = [
  {
    name: "Electronics",
    description:
      "Explore the latest smartphones, laptops, headphones, smartwatches, and cutting-edge tech accessories designed to enhance your daily life.",
    image: image1,
  },
  {
    name: "Fashion",
    description:
      "Discover stylish clothing, shoes, bags, and accessories for men, women, and kids. Stay on trend with seasonal collections and must-have pieces.",

    image: image2,
  },
  {
    name: "Home & Kitchen",
    description:
      "Upgrade your living space with modern furniture, kitchen appliances, decor items, and storage solutions to make your home both functional and beautiful.",

    image: image3,
  },
  {
    name: "Sports & Outdoors",
    description:
      "Get active with top-quality fitness gear, camping essentials, sportswear, bicycles, and outdoor equipment built for every adventure.",

    image: image4,
  },
];
