# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm run install-all
```

### 2. Choose Your Database Option

#### Option A: Demo Mode (No MongoDB Required) - RECOMMENDED FOR QUICK TESTING
```bash
npm run demo
```
This starts the app with in-memory data storage. Perfect for testing without MongoDB setup.

#### Option B: Full MongoDB Mode
1. Install and start MongoDB on your system
2. Seed the database: `npm run seed`
3. Start the application: `npm run dev`

### 3. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**Demo Mode is running!** ✅

## 🎯 Testing the Application

1. **Browse Products**: Visit http://localhost:3000
2. **Add to Cart**: Click on any product and add to cart
3. **View Cart**: Check cart functionality and quantity changes
4. **Checkout**: Fill out customer info and place an order
5. **Admin Panel**: 
   - Login at http://localhost:3000/login
   - Use credentials: `admin@coffeeshop.com` / `admin123`
   - Add/delete products

## 🛠 Troubleshooting

- **MongoDB Connection Error**: Make sure MongoDB is running
- **Port 3000/5000 in use**: Stop other applications using these ports
- **CORS Issues**: Backend includes CORS middleware for localhost:3000

## 📁 Project Structure
```
coffee-shop-mern/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context (Cart, Auth)
│   │   ├── pages/          # Page components
│   │   └── services/       # API calls
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Auth middleware
│   └── seedData.js         # Database seeding
└── README.md
```