# Coffee Shop MERN

A full-stack coffee shop web application built with MongoDB, Express.js, React, and Node.js.

## Features

- Product listing with images, titles, prices, and ratings
- Product details page
- Shopping cart with add/remove/quantity change functionality
- Cart persistence using localStorage
- Checkout process with customer information
- Order management system
- Admin panel for product management
- JWT authentication for admin access

## Project Structure

```
coffee-shop-mern/
├── client/          # React frontend
├── server/          # Express backend
├── package.json     # Root package.json for scripts
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

**Note:** Make sure MongoDB is running on your system before starting the application. If you're using a local MongoDB installation, start it with `mongod` command.

### 1. Clone the repository
```bash
git clone <repository-url>
cd coffee-shop-mern
```

### 2. Install dependencies
```bash
# Install all dependencies (client + server)
npm run install-all

# Or install separately:
npm run install-server
npm run install-client
```

### 3. Environment Setup
Create a `.env` file in the `server` directory:
```
MONGODB_URI=mongodb://localhost:27017/coffee-shop
JWT_SECRET=your-secret-key
PORT=5000
```

### 4. Seed the database (optional)
```bash
# Populate database with sample products and admin user
npm run seed
```

### 5. Start the application
```bash
# Start both client and server concurrently
npm run dev

# Or start separately:
npm run server  # Backend on http://localhost:5000
npm run client  # Frontend on http://localhost:3000
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Create new order

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Admin register

## Admin Access

Default admin credentials:
- Email: admin@coffeeshop.com
- Password: admin123

## Technologies Used

### Frontend
- React 18
- React Router DOM
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- cors for cross-origin requests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.