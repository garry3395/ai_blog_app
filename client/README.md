# Blog App Client

A modern React frontend for a blogging platform built with Vite, featuring blog display, admin panel, and rich text editing.

## Features

- **React 19**: Latest React with modern hooks
- **Vite**: Lightning-fast development and build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing (v7)
- **Rich Text Editor**: Quill editor for blog content
- **Markdown Support**: Marked library for markdown parsing
- **HTTP Client**: Axios for API communication
- **Toast Notifications**: React Hot Toast for user feedback
- **Admin Panel**: Dashboard for blog management
- **Responsive Design**: Mobile-friendly interface

## Project Structure

```
client/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Blogcards.jsx     # Blog card display
│   │   ├── Bloglist.jsx      # Blog list view
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Header.jsx        # Header component
│   │   ├── Loader.jsx        # Loading spinner
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Newsletter.jsx    # Newsletter signup
│   │   └── admin/            # Admin components
│   │       ├── BlogItemTable.jsx
│   │       ├── CommentTableItem.jsx
│   │       ├── Login.jsx
│   │       └── SideBar.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page
│   │   ├── Blog.jsx          # Single blog view
│   │   └── admin/            # Admin pages
│   │       ├── Dashboard.jsx
│   │       ├── Layout.jsx
│   │       ├── AddBlog.jsx
│   │       ├── ListBlog.jsx
│   │       └── Comments.jsx
│   ├── context/              # React Context
│   │   └── AppContext.jsx    # Global app context
│   ├── assets/               # Static assets
│   │   ├── assets.js
│   │   └── rich-text-css.txt
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static public files
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
└── package.json              # Dependencies
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

**Development Mode** (with hot module replacement):
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default port)

**Production Build**:
```bash
npm run build
```

**Preview Production Build**:
```bash
npm run preview
```

**Linting**:
```bash
npm run lint
```

## Key Dependencies

### Framework & Routing
- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing

### Styling
- **tailwindcss**: CSS framework
- **@tailwindcss/vite**: Tailwind Vite plugin

### Editors & Parsers
- **quill**: Rich text editor
- **marked**: Markdown parser

### UI & Notifications
- **react-hot-toast**: Toast notifications
- **motion**: Animation library
- **moment**: Date/time utility

### HTTP & API
- **axios**: HTTP client

### Build Tools (Dev)
- **vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
- **eslint**: Code linting

## Environment Setup

Create a `.env` or `.env.local` file if needed to configure:
```
VITE_API_URL=http://localhost:3000
```

## Components Overview

### Layout Components
- **Navbar**: Main navigation
- **Header**: Page header
- **Footer**: Page footer
- **SideBar**: Admin sidebar

### Content Components
- **Blogcards**: Individual blog card
- **Bloglist**: Blog listing
- **Loader**: Loading indicator
- **Newsletter**: Newsletter subscription

### Editor Components
- **AddBlog**: Create new blog (admin)
- **BlogItemTable**: Blog management table (admin)
- **CommentTableItem**: Comment display (admin)

## Styling

The app uses **Tailwind CSS** for styling with custom configuration in `tailwind.config.js`. CSS is organized in `src/index.css` with additional rich text styles in `src/assets/rich-text-css.txt`.

## Development Tools

- **ESLint**: Code quality checking
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
