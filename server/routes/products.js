const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const { adminAuth } = require('../middleware/auth');
const { products } = require('../mockData');

// router.use((req, res, next) => {
//   // readyState: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
//   if (mongoose.connection.readyState !== 1) {
//     return res.status(503).json({ message: 'Service temporarily unavailable - database not connected' });
//   }
//   next();
// });


// Get all products
router.get('/', async (req, res) => {
  try {
    const inStockProducts = products.filter(p => p.inStock);
    res.json(inStockProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = products.find(p => p._id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create product (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { name, description, price, image, rating, category } = req.body;
    
    const product = new Product({
      name,
      description,
      price,
      image,
      rating,
      category
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete product (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;