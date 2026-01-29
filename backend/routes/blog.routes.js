import express from 'express'
import upload from '../middlewares/upload.js';
import { addBlog } from '../controllers/blog.controller.js';
import auth from '../middlewares/auth.middleware.js';

const blogRouter=express.Router()
blogRouter.post('/add',upload.single("image"),auth,addBlog)
export default blogRouter;
