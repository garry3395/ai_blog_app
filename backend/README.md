# Blog App Backend

A Node.js Express backend server for a blogging platform with admin functionality, authentication, and AI-powered features.

## Features

- **Express Server**: RESTful API with Express.js
- **Authentication**: JWT-based authentication with cookie support
- **Database**: MongoDB integration with Mongoose ODM
- **File Uploads**: Multer for handling file uploads
- **Cloud Storage**: Cloudinary integration for image management
- **AI Integration**: Google Generative AI (Gemini) for content assistance
- **CORS**: Cross-origin resource sharing for frontend integration
- **Admin Panel**: Admin routes and controllers for blog management
- **Comments**: Blog comment functionality

## Project Structure

```
backend/
├── config/              # Configuration files
│   ├── gemini.js       # Google Gemini AI configuration
│   └── mongodb.js      # MongoDB connection setup
├── controllers/         # Business logic
│   ├── admin.controller.js    # Admin operations
│   └── blog.controller.js     # Blog operations
├── middlewares/         # Custom middleware
│   ├── auth.middleware.js     # JWT authentication
│   └── upload.js       # File upload handler
├── models/             # Database schemas
│   ├── blog.schema.js  # Blog model
│   └── Comment.js      # Comment model
├── routes/             # API routes
│   ├── admin.route.js  # Admin endpoints
│   └── blog.routes.js  # Blog endpoints
├── utils/              # Utility functions
│   └── cloudinary.js   # Cloudinary helper
├── server.js           # Main server entry point
└── package.json        # Dependencies
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with the following variables:
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

## Running the Server

**Development Mode** (with auto-reload using nodemon):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

The server will run on `http://localhost:3000` (or the port specified in `.env`)

## API Endpoints

### Admin Routes (`/api/admin`)
- Admin-specific operations for blog management

### Blog Routes (`/api/blog`)
- Create, read, update, delete blog posts
- Manage comments
- AI-powered content features

## Dependencies

### Core Dependencies
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **jsonwebtoken**: JWT authentication
- **cookie-parser**: Cookie handling
- **cors**: Cross-origin support

### File & Storage
- **multer**: File upload handling
- **cloudinary**: Cloud image storage

### AI
- **@google/genai**: Google Generative AI integration

### Development
- **nodemon**: Auto-restart on file changes
- **dotenv**: Environment variable management

## Author

Created by: gurjeet

## License

ISC
