import express from "express"
import { userModelController } from "./user.controls";
import { verifyToken } from "../../utilis/verifiToken";
import { isAdmin } from "../../utilis/isAdmin";
const router = express.Router()

router.post('/auth/register',userModelController?.userCreat);
router.post('/auth/login',userModelController?.loginUser);
router.patch('/admin/users/:userId/block',verifyToken,isAdmin, userModelController?.blockuserByAdmint );
router.delete('/admin/blogs/:id',verifyToken,isAdmin,userModelController?.deletBlog);

// router.post('/products',);
// router.get('/products', );
// router.get('/products/:productId', );
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

export default router;