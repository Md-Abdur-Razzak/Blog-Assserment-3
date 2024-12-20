import express from "express"
import { userModelController } from "./user.controls";
const router = express.Router()

router.post('/auth/register',userModelController?.userCreat);
router.post('/auth/login',userModelController?.loginUser);
router.patch('/admin/users/:userId/block',userModelController?.blockuserByAdmint );
router.delete('/admin/blogs/:id',);

// router.post('/products',);
// router.get('/products', );
// router.get('/products/:productId', );
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

export default router;