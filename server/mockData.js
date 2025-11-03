// Mock data for demonstration when MongoDB is not available
const mockProducts = [
  {
    _id: '1',
    name: "Espresso",
    description: "Rich and bold espresso shot made from premium coffee beans",
    price: 2.50,
    image: "/images/products/espresso.svg",
    rating: 4.8,
    category: "coffee",
    inStock: true
  },
  {
    _id: '2',
    name: "Cappuccino",
    description: "Classic cappuccino with steamed milk and foam art",
    price: 4.25,
    image: "/images/products/cappuccino.svg",
    rating: 4.7,
    category: "coffee",
    inStock: true
  },
  {
    _id: '3',
    name: "Latte",
    description: "Smooth latte with perfectly steamed milk",
    price: 4.75,
    image: "/images/products/latte.svg",
    rating: 4.6,
    category: "coffee",
    inStock: true
  },
  {
    _id: '4',
    name: "Americano",
    description: "Bold americano coffee for the purists",
    price: 3.25,
    image: "/images/products/americano.svg",
    rating: 4.5,
    category: "coffee",
    inStock: true
  },
  {
    _id: '5',
    name: "Green Tea",
    description: "Fresh organic green tea with antioxidants",
    price: 2.75,
    image: "/images/products/green-tea.svg",
    rating: 4.4,
    category: "tea",
    inStock: true
  },
  {
    _id: '6',
    name: "Croissant",
    description: "Buttery, flaky croissant baked fresh daily",
    price: 3.50,
    image: "/images/products/croissant.svg",
    rating: 4.6,
    category: "pastry",
    inStock: true
  },
  {
    _id: '7',
    name: "Blueberry Muffin",
    description: "Fresh blueberry muffin with a golden top",
    price: 2.95,
    image: "/images/products/blueberry-muffin.svg",
    rating: 4.5,
    category: "pastry",
    inStock: true
  },
  {
    _id: '8',
    name: "Turkey Sandwich",
    description: "Fresh turkey sandwich with lettuce and tomato",
    price: 7.50,
    image: "/images/products/turkey-sandwich.svg",
    rating: 4.3,
    category: "sandwich",
    inStock: true
  }
];

const mockAdmin = {
  _id: 'admin1',
  email: 'admin@brcoffee.com',
  password: '$2a$10$V26Dw09Xycu.6N39PTOCl.6ZuoGHc88fA2m3jkH0NaSCSKmWyFAAC', // admin123
  role: 'admin'
};

let orders = [];
let products = [...mockProducts];
let users = [mockAdmin];

module.exports = {
  products,
  orders,
  users,
  mockProducts,
  mockAdmin
};