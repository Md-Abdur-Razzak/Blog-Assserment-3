import express from "express"
import { blogModelController } from "./blog.controlls";

const blogRouter = express.Router()

blogRouter.post('/blogs',blogModelController?.blogCreat);
// router.get('/products', );
blogRouter.put('/blogs/:id',blogModelController?.updateBlog);
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

export default blogRouter