const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Espresso",
    description: "Rich and bold espresso shot made from premium coffee beans",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400",
    rating: 4.8,
    category: "coffee"
  },
  {
    name: "Cappuccino",
    description: "Classic cappuccino with steamed milk and foam art",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    rating: 4.7,
    category: "coffee"
  },
  {
    name: "Latte",
    description: "Smooth latte with perfectly steamed milk",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
    rating: 4.6,
    category: "coffee"
  },
  {
    name: "Americano",
    description: "Bold americano coffee for the purists",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400",
    rating: 4.5,
    category: "coffee"
  },
  {
    name: "Green Tea",
    description: "Fresh organic green tea with antioxidants",
    price: 2.75,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
    rating: 4.4,
    category: "tea"
  },
  {
    name: "Croissant",
    description: "Buttery, flaky croissant baked fresh daily",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5b?w=400",
    rating: 4.6,
    category: "pastry"
  },
  {
    name: "Blueberry Muffin",
    description: "Fresh blueberry muffin with a golden top",
    price: 2.95,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",
    rating: 4.5,
    category: "pastry"
  },
  {
    name: "Turkey Sandwich",
    description: "Fresh turkey sandwich with lettuce and tomato",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400",
    rating: 4.3,
    category: "sandwich"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted');

    // Create admin user
    const adminUser = new User({
      email: 'admin@brcoffee.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Admin user created');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();