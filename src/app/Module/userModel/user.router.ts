import express from "express"
import { userModelController } from "./user.controls";
const router = express.Router()

router.post('/user',userModelController?.userCreat);
// router.get('/products', );
// router.get('/products/:productId', );
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

// router.post('/products',);
// router.get('/products', );
// router.get('/products/:productId', );
// router.put('/products/:productId', );
// router.delete('/products/:productId',);

export default router;