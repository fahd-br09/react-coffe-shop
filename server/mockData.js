// Mock data for demonstration when MongoDB is not available
const mockProducts = [
  {
    _id: '1',
    name: "Espresso",
    description: "Rich and bold espresso shot made from premium coffee beans",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400",
    rating: 4.8,
    category: "coffee",
    inStock: true
  },
  {
    _id: '2',
    name: "Cappuccino",
    description: "Classic cappuccino with steamed milk and foam art",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    rating: 4.7,
    category: "coffee",
    inStock: true
  },
  {
    _id: '3',
    name: "Latte",
    description: "Smooth latte with perfectly steamed milk",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
    rating: 4.6,
    category: "coffee",
    inStock: true
  },
  {
    _id: '4',
    name: "Americano",
    description: "Bold americano coffee for the purists",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400",
    rating: 4.5,
    category: "coffee",
    inStock: true
  },
  {
    _id: '5',
    name: "Green Tea",
    description: "Fresh organic green tea with antioxidants",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    rating: 4.4,
    category: "tea",
    inStock: true
  },
  {
    _id: '6',
    name: "Croissant",
    description: "Buttery, flaky croissant baked fresh daily",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5b?w=400",
    rating: 4.6,
    category: "pastry",
    inStock: true
  },
  {
    _id: '7',
    name: "Blueberry Muffin",
    description: "Fresh blueberry muffin with a golden top",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",
    rating: 4.5,
    category: "pastry",
    inStock: true
  },
  {
    _id: '8',
    name: "Turkey Sandwich",
    description: "Fresh turkey sandwich with lettuce and tomato",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400",
    rating: 4.3,
    category: "sandwich",
    inStock: true
  }
];

const mockAdmin = {
  _id: 'admin1',
  email: 'admin@coffeeshop.com',
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