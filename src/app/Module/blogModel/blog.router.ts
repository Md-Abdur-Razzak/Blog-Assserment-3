import express from "express"
import { blogModelController } from "./blog.controlls";
import { verifyToken } from "../../utilis/verifiToken";
const blogRouter = express.Router()

 
blogRouter.post('/blogs',verifyToken,blogModelController?.blogCreat);
// router.get('/products', );
blogRouter.put('/blogs/:id',verifyToken,blogModelController?.updateBlog);
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

export default blogRouter