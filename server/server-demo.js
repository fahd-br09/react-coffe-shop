const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { products, orders, users } = require('./mockData');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auth middleware
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = users.find(u => u._id === decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

const adminAuth = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    next();
  });
};

// Routes

// Products
app.get('/api/products', (req, res) => {
  res.json(products.filter(p => p.inStock));
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

app.post('/api/products', adminAuth, (req, res) => {
  const { name, description, price, image, rating, category } = req.body;
  
  const newProduct = {
    _id: Date.now().toString(),
    name,
    description,
    price: parseFloat(price),
    image,
    rating: parseFloat(rating),
    category,
    inStock: true
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete('/api/products/:id', adminAuth, (req, res) => {
  const index = products.findIndex(p => p._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

// Orders
app.post('/api/orders', (req, res) => {
  const { customerInfo, items, total } = req.body;
  
  const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  
  const order = {
    _id: Date.now().toString(),
    orderId,
    customerInfo,
    items,
    total,
    status: 'pending',
    createdAt: new Date()
  };

  orders.push(order);
  res.status(201).json({
    message: 'Order created successfully',
    orderId: order.orderId,
    order
  });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/orders/:orderId', (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
});

// Auth
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Coffee Shop API is running in demo mode!',
    note: 'Using in-memory data storage. Data will reset on server restart.'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (Demo Mode - In-Memory Database)`);
  console.log('Note: Data will reset when server restarts');
});