import { RequestHandler } from "express";
import { golobalResponseSend } from "../../utilis/golobal.respons.send";
import { golobalResponseError } from "../../utilis/golobalError";
import { stackError } from "../../utilis/stackError";
import BlogPostModel from "./blog.model";
import { BlogPost } from "./blog.interface";
import { user } from "../../utilis/verifiToken";
import userModel from "../userModel/user.model";


const blogCreat:RequestHandler = async(req,res)=>{
    try {
        let blogData = req.body
        const {email}= user as  { email: string; password: string }
        const findByIddata = await userModel.findOne({email})
        if (findByIddata) {
            blogData.author = findByIddata?._id
        }
        let creatblogData =await BlogPostModel.create(blogData)
        res.status(201).json(
        golobalResponseSend(true,"Blog created successfully",201,creatblogData)
       )
    } catch (error) {
     res.status(400).json(
        golobalResponseError(false,"Validation error",400,error,stackError(error))
     )
       
    }
  

}

const updateBlog:RequestHandler = async(req,res)=>{
    try {
        const id = req.params?.id
        const {content,title}=req.body
        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
                statusCode: 400,
            });
        }
        let updateblogData =await BlogPostModel.findByIdAndUpdate(id,{content,title},{ new: true })
        res.status(201).json(
        golobalResponseSend(true,"Blog updated successfully",201,updateblogData)
       )
    } catch (error) {
     res.status(400).json(
        golobalResponseError(false,"Validation error",400,error,stackError(error))
     )
       
    }
  

}

const deletBlog:RequestHandler = async(req,res)=>{
    try {
        const id = req.params?.id
        let findData =await BlogPostModel.findById(id)
        if (!findData) {
            return res.status(400).json({
                success: false,
                message: "please give me vaild id",
                statusCode: 400,
            });
        }
      await BlogPostModel.deleteOne({_id:id})
        res.status(201).json(
      {
        success: true,
        message: "Blog deleted successfully",
        statusCode: 400,
      }
       )
    } catch (error) {
     res.status(400).json(
        golobalResponseError(false,"Somthing wrong !",400,error,stackError(error))
     )
       
    }
  

}

export const blogModelController = {blogCreat,updateBlog,deletBlog}