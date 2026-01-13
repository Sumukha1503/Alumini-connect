# Alumni Network Platform

A comprehensive multi-tenant alumni networking platform built with React, Node.js, and MongoDB.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Multi-Tenancy**: College-based data isolation and management
- **Role-Based Access**: Support for Super Admin, College Admin, Alumni, and Student roles
- **Alumni Directory**: Search and connect with fellow alumni
- **Social Feed**: Share updates, posts, and engage with the community
- **Connections**: Send and manage connection requests
- **Real-time Messaging**: Chat with connections using Socket.IO
- **Events Management**: Create and manage alumni events
- **Job Board**: Post and browse job opportunities

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Socket.IO Client for real-time features

### Backend
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Socket.IO for real-time communication

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or remote connection)
- npm or yarn

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Sumukha1503/Alumini-connect.git
cd "Alumini Network"
```

### 2. Backend Setup
```bash
cd alumni-connect-backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/alumni-connect
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Frontend Setup
```bash
cd ../alumni-connect-frontend
npm install
```

## 🎯 Running the Application

### Start MongoDB
```bash
# Make sure MongoDB is running
mongod
```

### Seed Demo Data
```bash
cd alumni-connect-backend
npm run seed
```

This creates 5 demo user accounts with the following credentials:
- `demo@alumni.com` / `password123` (Alumni)
- `admin@college.edu` / `admin123` (College Admin)
- `student@college.edu` / `student123` (Student)
- `alice@alumni.com` / `password123` (Alumni)
- `bob@alumni.com` / `password123` (Alumni)

### Start Backend Server
```bash
cd alumni-connect-backend
npm start
```
Backend runs on: `http://localhost:3001`

### Start Frontend Development Server
```bash
cd alumni-connect-frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

## 🔑 Demo Login

1. Open `http://localhost:5173` in your browser
2. Use demo credentials:
   - **Email**: `demo@alumni.com`
   - **Password**: `password123`
3. Click "Sign in"

## 📁 Project Structure

```
Alumini Network/
├── alumni-connect-backend/
│   ├── src/
│   │   ├── config/          # Database and environment config
│   │   ├── middleware/      # Authentication and validation
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   ├── scripts/         # Database seeding
│   │   └── server.ts        # Express app entry point
│   └── package.json
│
└── alumni-connect-frontend/
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── hooks/           # Custom React hooks
    │   ├── pages/           # Page components
    │   ├── services/        # API service layer
    │   ├── store/           # Redux store and slices
    │   ├── types/           # TypeScript type definitions
    │   └── utils/           # Helper functions
    └── package.json
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

## 🧪 Testing

Test the login API:
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@alumni.com","password":"password123"}'
```

## 🚧 Development

### Available Scripts

**Backend:**
- `npm start` - Run production server
- `npm run dev` - Run development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm run seed` - Seed database with demo data

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Sumukha H S - [@Sumukha1503](https://github.com/Sumukha1503)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by professional alumni networking platforms
- Designed for scalability and multi-tenancy

## 📞 Support

For support, email sumukhahs@example.com or open an issue in the repository.
