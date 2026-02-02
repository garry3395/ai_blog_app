import express from 'express'
import upload from '../middlewares/upload.js';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blog.controller.js';
import auth from '../middlewares/auth.middleware.js';

const blogRouter=express.Router()
blogRouter.post('/add',upload.single("image"),auth,addBlog)
blogRouter.get('/all',getAllBlogs)
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById)
blogRouter.post('/toggle-publish',auth,togglePublish)
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comments',getBlogComments)
export default blogRouter;
