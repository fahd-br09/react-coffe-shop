# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm run install-all
```

### 2. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod

# Or if using MongoDB as a service, it should already be running
```

### 3. Seed Database (Optional but Recommended)
```bash
npm run seed
```
This creates:
- 8 sample products (coffee, tea, pastries, sandwiches)
- Admin user: `admin@coffeeshop.com` / `admin123`

### 4. Start the Application
```bash
npm run dev
```

This starts:
- Backend server on http://localhost:5000
- Frontend React app on http://localhost:3000

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