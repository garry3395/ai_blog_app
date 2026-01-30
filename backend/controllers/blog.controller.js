import express from 'express';
import cloudinary from "../utils/cloudinary.js";
import Blog from '../models/blog.schema.js';
import Comment from '../models/Comment.js';
export const addBlog = async (req, res) => {
  try {
    
    const { title, subtitle, description, category, isPublished } = JSON.parse(req.body.blog);


    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Please fill required information"
      });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imageFile.path, {
      folder: "blogApp_images"
    });

    const blog = {
      title,
      subtitle,
      description,
      category,
      isPublished,
      image: result.secure_url
    };

    await Blog.create(blog);

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getBlogById=async(req,res)=>{
  try{
    const {blogId}=req.params;
    const blog=await Blog.findById(blogId)
    if(!blog){
      return res.status(400).json({success:false,message:"blog not found"})
    }
    res.status(200).json({success:true,blog})
  }catch(error){
    res.json({success:false,message:error.message})

  }
}
export const deleteBlogById=async(req,res)=>{
  try {
    const {id}=req.body;
    await Blog.findByIdAndDelete(id)
    //delete all comments associated with id 
    await Comment.deleteMany({blog:id})
    res.json({success:true,message:"Blog deleted successfully"})

   

  } catch (error) {
     res.json({success:false,message:error.message})

  }
}
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.status(200).json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const addComment= async (req,res)=>{
try {
    const {blog,name,content}=req.body
    await Comment.create({blog,name,content})
  await  Comment.create()
  res.status(200).json({success:true ,message:"comment added for review"})
} catch (error) {
   res.status(500).json({ success: false, message: error.message });

}
}
export const getBlogComments=async(req,res)=>{
  try {
    const {blog,name,content}=req.body;
    const comments=await Comment.find({blog: blogId,isApproved:true}).sort({createdAt:-1})
    res.json({success:true,message:comments})
  } catch (error) {
    res.json({success:false,message:error.message})
     
  }
}