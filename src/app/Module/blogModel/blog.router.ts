import express from "express"
import { blogModelController } from "./blog.controlls";
import { verifyToken } from "../../utilis/verifiToken";
const blogRouter = express.Router()

 
blogRouter.post('/blogs',verifyToken,blogModelController?.blogCreat);
blogRouter.patch('/blogs/:id',verifyToken,blogModelController?.updateBlog);
blogRouter.delete('/blogs/:id', blogModelController?.deletBlog);

export default blogRouter