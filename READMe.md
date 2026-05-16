# 📝 Todo App - Full Stack Task Management Application

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A production-ready full-stack Todo application with user authentication, Google OAuth integration, and a modern glassmorphism UI. Users can securely create, manage, and track their tasks with real-time updates.

## 🚀 Live Demo

- **Frontend**: [https://todo-app-mu-ten-49.vercel.app](https://todo-app-mu-ten-49.vercel.app)
- **Backend API**: [https://https://todo-backend-whvv.onrender.com](https://https://todo-backend-whvv.onrender.com)

## ✨ Features

### 🔐 Authentication

- Email/Password registration and login
- Google OAuth 2.0 integration
- JWT-based authentication with 7-day expiry
- Password hashing with bcryptjs
- Protected routes and API endpoints
- Remember me functionality
- Secure logout

### 📋 Task Management

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (All, Pending, Completed)
- Real-time UI updates
- Responsive design for all devices
- Task creation timestamp display

### 🎨 User Interface

- Modern glassmorphism design
- Gradient backgrounds and smooth animations
- Fully responsive layout
- Loading states and spinners
- Toast notifications for user feedback
- Error boundaries for graceful error handling
- Professional color scheme

### 🛡️ Security Features

- Password validation (minimum 6 characters)
- Email format validation
- Protected API routes with JWT verification
- User-specific data isolation
- CORS properly configured
- Environment variable protection

## 🏗️ Architecture

┌─────────────────────────────────────────────────────────────┐
│ Client (React + Vite) │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ LoginPage │ │ TodoPage │ │ Auth Context │ │
│ │ Component │ │ Component │ │ (State Management)│ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└───────────────────────────┬─────────────────────────────────┘
│ HTTP/HTTPS
│ JWT Token
▼
┌─────────────────────────────────────────────────────────────┐
│ Backend (Express.js + Node.js) │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Middleware Stack │ │
│ │ ┌──────────┐ ┌──────────┐ ┌────────────────────┐ │ │
│ │ │ CORS │→│ Auth │→│ Error Handler │ │ │
│ │ └──────────┘ └──────────┘ └────────────────────┘ │ │
│ └──────────────────────────────────────────────────────┘ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐ │
│ │ Auth │ │ Tasks │ │ Google OAuth │ │
│ │ Controllers │ │ Controllers │ │ Strategy │ │
│ └─────────────┘ └─────────────┘ └─────────────────────┘ │
└───────────────────────────┬─────────────────────────────────┘
│ Mongoose ODM
▼
┌─────────────────────────────────────────────────────────────┐
│ MongoDB Database │
│ ┌─────────────────────┐ ┌─────────────────────────────┐ │
│ │ Users │ │ Tasks │ │
│ │ - name │◄───│ - taskname │ │
│ │ - email (unique) │ │ - description │ │
│ │ - password (hash) │ │ - completed (boolean) │ │
│ │ - googleId │ │ - user_id (reference) │ │
│ │ - isGoogleAuth │ │ - timestamps │ │
│ └─────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

## 📦 Tech Stack

### Frontend

| Technology       | Version | Purpose      |
| ---------------- | ------- | ------------ |
| React            | 18.2.0  | UI Framework |
| Vite             | 5.0.8   | Build Tool   |
| TailwindCSS      | 3.4     | Styling      |
| Axios            | 1.6.2   | HTTP Client  |
| Lucide React     | 0.263.1 | Icons        |
| React Router DOM | 6.20.1  | Routing      |

### Backend

| Technology | Version | Purpose                       |
| ---------- | ------- | ----------------------------- |
| Node.js    | 18.x    | Runtime                       |
| Express.js | 4.18.2  | Web Framework                 |
| MongoDB    | 6.x     | Database                      |
| Mongoose   | 8.0     | ODM                           |
| JWT        | 9.0.2   | Authentication                |
| bcryptjs   | 2.4.3   | Password Hashing              |
| Passport   | 0.7.0   | OAuth Strategy                |
| CORS       | 2.8.5   | Cross-origin Resource Sharing |

## 📁 Project Structure

### Frontend Structure

todo-frontend/
├── src/
│ ├── components/
│ │ ├── LoginPage.jsx # Authentication UI
│ │ ├── TodoPage.jsx # Task management UI
│ │ ├── LoadingSpinner.jsx # Loading indicator
│ │ └── PrivateRoute.jsx # Protected route wrapper
│ ├── context/
│ │ └── AuthContext.jsx # Global auth state
│ ├── services/
│ │ └── api.js # Axios configuration
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── public/ # Static assets
├── index.html # HTML template
├── package.json # Dependencies
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind config
└── postcss.config.js # PostCSS config

text

### Backend Structure

todo-backend/
├── src/
│ ├── config/
│ │ ├── db.js # Database connection
│ │ └── passport.js # Google OAuth config
│ ├── controllers/
│ │ ├── authController.js # Auth logic
│ │ └── taskController.js # Task CRUD operations
│ ├── middleware/
│ │ ├── auth.js # JWT verification
│ │ └── errorHandler.js # Global error handler
│ ├── models/
│ │ ├── User.js # User schema
│ │ └── Task.js # Task schema
│ ├── routes/
│ │ ├── authRoutes.js # Auth endpoints
│ │ └── taskRoutes.js # Task endpoints
│ ├── utils/
│ │ └── generateToken.js # JWT generation
│ └── index.js # Server entry point
├── .env # Environment variables
├── package.json # Dependencies
└── README.md # Documentation

text

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher) or MongoDB Atlas account
- Google Cloud Console account (for OAuth)
- npm or yarn package manager

### Environment Variables

#### Backend (.env)

```env
# Server Configuration
PORT=8001
NODE_ENV=production

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp

# JWT
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
Frontend (.env)
env
VITE_API_URL=http://localhost:8001/api
Installation Steps
1. Clone the Repository
bash
git clone https://github.com/rajendrabist07/todo-app.git
cd todo-app
2. Backend Setup
bash
cd todo-backend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
3. Frontend Setup
bash
cd todo-frontend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
4. Access the Application
Frontend: http://localhost:5173

Backend API: http://localhost:8001

API Health Check: http://localhost:8001/api/health


```

todo-frontend/
├── src/
│ ├── components/
│ │ ├── LoginPage.jsx # Authentication UI
│ │ ├── TodoPage.jsx # Task management UI
│ │ ├── LoadingSpinner.jsx # Loading indicator
│ │ └── PrivateRoute.jsx # Protected route wrapper
│ ├── context/
│ │ └── AuthContext.jsx # Global auth state
│ ├── services/
│ │ └── api.js # Axios configuration
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── public/ # Static assets
├── index.html # HTML template
├── package.json # Dependencies
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind config
└── postcss.config.js # PostCSS config

text

### Backend Structure

todo-backend/
├── src/
│ ├── config/
│ │ ├── db.js # Database connection
│ │ └── passport.js # Google OAuth config
│ ├── controllers/
│ │ ├── authController.js # Auth logic
│ │ └── taskController.js # Task CRUD operations
│ ├── middleware/
│ │ ├── auth.js # JWT verification
│ │ └── errorHandler.js # Global error handler
│ ├── models/
│ │ ├── User.js # User schema
│ │ └── Task.js # Task schema
│ ├── routes/
│ │ ├── authRoutes.js # Auth endpoints
│ │ └── taskRoutes.js # Task endpoints
│ ├── utils/
│ │ └── generateToken.js # JWT generation
│ └── index.js # Server entry point
├── .env # Environment variables
├── package.json # Dependencies
└── README.md # Documentation

text

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher) or MongoDB Atlas account
- Google Cloud Console account (for OAuth)
- npm or yarn package manager

### Environment Variables

#### Backend (.env)

```env
# Server Configuration
PORT=8001
NODE_ENV=production

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp

# JWT
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Frontend URL
FRONTEND_URL=http://localhost:5173
Frontend (.env)
env
VITE_API_URL=http://localhost:8001/api
Installation Steps
1. Clone the Repository
bash
git clone https://github.com/rajendrabist07/todo-app.git
cd todo-app
2. Backend Setup
bash
cd todo-backend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
3. Frontend Setup
bash
cd todo-frontend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
4. Access the Application
Frontend: http://localhost:5173

Backend API: http://localhost:8001

API Health Check: http://localhost:8001/api/health
```

Frontend (.env)
env
VITE_API_URL=http://localhost:8001/api
Installation Steps

1. Clone the Repository
   bash
   git clone https://github.com/rajendrabist07/todo-app.git
   cd todo-app
2. Backend Setup
   bash
   cd todo-backend
   npm install
   cp .env.example .env # Configure your environment variables
   npm run dev
3. Frontend Setup
   bash
   cd todo-frontend
   npm install
   cp .env.example .env # Configure your environment variables
   npm run dev
4. Access the Application
   Frontend: http://localhost:5173

Backend API: http://localhost:8001

API Health Check: http://localhost:8001/api/health

🔌 API Documentation
Authentication Endpoints
Method Endpoint Description Auth Required
POST /api/auth/register Register new user No
POST /api/auth/login Login user No
GET /api/auth/me Get current user Yes
GET /api/auth/google Google OAuth login No
GET /api/auth/google/callback Google OAuth callback No
Task Endpoints
Method Endpoint Description Auth Required
GET /api/tasks Get all user tasks Yes
POST /api/tasks Create new task Yes
PUT /api/tasks/:id Update task Yes
DELETE /api/tasks/:id Delete task Yes
PATCH /api/tasks/:id/toggle Toggle task completion Yes
API Response Examples
Successful Response

json
{
"success": true,
"data": {
"\_id": "65a1b2c3d4e5f67890abcdef",
"taskname": "Complete project",
"description": "Finish the todo app documentation",
"completed": false,
"createdAt": "2024-01-15T10:30:00.000Z",
"updatedAt": "2024-01-15T10:30:00.000Z"
}
}
Error Response
json
{
"success": false,
"message": "Invalid credentials"
}

🧪 Testing
Run Backend Tests
bash
cd todo-backend
npm test
Run Frontend Tests
bash
cd todo-frontend
npm test
Manual Testing Checklist
User registration with valid data

User registration with duplicate email (should fail)

Login with correct credentials

Login with incorrect credentials (should fail)

Google OAuth login flow

Create new task

Create task with empty fields (should fail)

View all tasks for logged-in user only

Mark task as complete/incomplete

Delete task

Filter tasks by status

Logout functionality

Protected routes (cannot access without token)

Token expiration handling

🚢 Deployment
Deploy Backend to Render
Push your code to GitHub

Create a new Web Service on Render

Connect your repository

Configure:

Build Command: npm install

Start Command: npm start

Environment Variables (add all from .env)

Deploy Frontend to Vercel/Netlify
Vercel
bash
npm install -g vercel
cd todo-frontend
vercel --prod
Netlify
bash
npm install -g netlify-cli
cd todo-frontend
npm run build
netlify deploy --prod --dir=dist
🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Guidelines
Follow ESLint configuration

Write meaningful commit messages

Update documentation for API changes

Add tests for new features

Ensure all tests pass before submitting PR

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Rajendra Bist

GitHub: @rajendrabist07

Email: rajendrabist07@gmail.com

🙏 Acknowledgments
React Documentation

TailwindCSS Documentation

Express.js Documentation

MongoDB Documentation

Google OAuth Documentation

🐛 Known Issues & Future Improvements
Known Issues
None currently reported

Future Improvements
Add task due dates and reminders

Implement task categories/tags

Add dark/light theme toggle

Implement task sharing between users

Add email notifications

Create mobile app with React Native

Add task analytics and statistics

Implement drag-and-drop task ordering

Add file attachments to tasks

Create admin dashboard

📞 Support
For support, email rajendrabist07@example.com or open an issue in the GitHub repository.

<div align="center"> <sub>Built with by Rajendra Bist</sub> </div> ```
This README.md file includes:

Professional Badges - Version, tech stack, license status

Complete Feature List - All implemented features with emojis

Architecture Diagram - Visual representation of the system

Tech Stack Tables - Organized by frontend/backend with versions

Project Structure - Detailed folder hierarchy

Setup Instructions - Step-by-step installation guide

API Documentation - All endpoints with examples

Testing Guide - How to test the application

Deployment Guide - Deploy to Render/Vercel/Netlify

Contributing Guidelines - For open source contributions

Future Improvements - Roadmap for development

Support Information - How to get help
