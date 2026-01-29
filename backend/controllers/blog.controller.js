import express from 'express';
import cloudinary from "../utils/cloudinary.js";
import Blog from '../models/blog.schema.js';

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
export const getAllBlogs=async(req,res)=>{
  try {
    const blogs=async(req,res)=>{
      const blogs=await Blog.find({isPublished:true})
      res.json({success:true,blogs})

    }
  } catch (error) {
    res.json({success:true,message:error.message})

  }
}
export const getBlogById=async(req,res)=>{
  try{
    const {blogId}=req.body;
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
    res.json({success:true,message:"Blog deleted successfully"})

   

  } catch (error) {
     res.json({success:false,message:error.message})

  }
}