# Blog App

A full-stack blogging platform built with Node.js Express backend and React frontend, featuring AI-powered content assistance, rich text editing, and an admin dashboard.
live link:https://blogingappai.vercel.app/
## Project Overview

This is a complete blogging application with separate frontend and backend components:

- **Backend**: RESTful API server with Express.js, MongoDB, authentication, and Google Gemini AI integration
- **Frontend**: Modern React application with Vite, Tailwind CSS, and React Router

## Project Structure

```
blog app/
├── backend/                 # Node.js Express server
│   ├── config/             # Configuration files
│   ├── controllers/        # Business logic
│   ├── middlewares/        # Custom middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── server.js           # Server entry point
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context
│   │   ├── assets/        # Static assets
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static files
│   ├── vite.config.js     # Vite configuration
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Frontend documentation
│
└── README.md              # This file
```

## Features

✨ **Core Features**
- Create, read, update, and delete blog posts
- User authentication with JWT
- Rich text editor (Quill) for content creation
- Markdown support for blog content
- Comment system on blog posts
- Responsive design for mobile and desktop

🤖 **AI-Powered Features**
- Google Gemini AI integration for content assistance
- AI-generated content suggestions

📸 **Media Management**
- Image upload with Multer
- Cloudinary cloud storage integration
- Optimized image delivery

👨‍💼 **Admin Features**
- Admin dashboard
- Blog management (CRUD operations)
- Comment moderation
- User management

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account (for image storage)
- Google API Key (for Gemini AI)

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd blog\ app
```

2. **Backend Setup:**
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```
PORT=3000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_gemini_api_key
```

3. **Frontend Setup:**
```bash
cd client
npm install
```

### Running the Application

**Option 1: Run in separate terminals**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

**Option 2: Run from root (if you have a root-level script)**
```bash
npm run dev  # Adjust based on your setup
```

## API Endpoints

### Admin Routes
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Get dashboard data
- `POST /api/admin/blog` - Create blog post
- `PUT /api/admin/blog/:id` - Update blog post
- `DELETE /api/admin/blog/:id` - Delete blog post

### Blog Routes
- `GET /api/blog` - Get all blogs
- `GET /api/blog/:id` - Get single blog
- `GET /api/blog/:id/comments` - Get blog comments
- `POST /api/blog/:id/comments` - Add comment

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **AI**: Google Generative AI (Gemini)
- **Dev Tools**: Nodemon

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Editor**: Quill
- **Markdown**: Marked
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Linting**: ESLint

## Configuration

### Environment Variables

**Backend (.env):**
- `PORT` - Server port (default: 3000)
- `FRONTEND_URL` - Frontend URL for CORS
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_*` - Cloudinary credentials
- `GOOGLE_API_KEY` - Google Gemini API key

**Frontend (.env.local):**
- `VITE_API_URL` - Backend API URL (default: http://localhost:3000)

## Project Commands

### Backend

```bash
# Install dependencies
npm install

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

### Frontend

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Directory Documentation

For detailed documentation of each part:
- See [Backend README](backend/README.md) for backend-specific information
- See [Frontend README](client/README.md) for frontend-specific information

## Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Changes**
   - Backend changes in `/backend`
   - Frontend changes in `/client`

3. **Test Your Changes**
   - Run both servers and test functionality
   - Check console for errors

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "description of changes"
   git push origin feature/feature-name
   ```

5. **Create Pull Request**

## Common Issues & Solutions

### Backend won't connect to MongoDB
- Verify `MONGODB_URI` in `.env`
- Check MongoDB service is running
- Ensure IP whitelist allows your connection

### Frontend can't reach backend
- Verify backend is running on correct port
- Check `VITE_API_URL` in frontend `.env`
- Ensure CORS is properly configured

### Images not uploading
- Verify Cloudinary credentials in `.env`
- Check file size limits in Multer config
- Ensure `cloudinary.js` is properly configured

### AI features not working
- Verify `GOOGLE_API_KEY` is set
- Check API key has Generative AI enabled
- Ensure Gemini API quota is available

## Author

Created by: gurjeet

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues or questions, please open an issue on the repository.
