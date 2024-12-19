import { RequestHandler } from "express";
import userModel from "./user.model";
import { golobalResponseSend } from "../../utilis/golobal.respons.send";
import { golobalResponseError } from "../../utilis/golobalError";
import { stackError } from "../../utilis/stackError";
// import { hashPassword } from "../../utilis/hassingPassword";

const userCreat:RequestHandler = async(req,res)=>{
    try {
        let reciveUser = req.body
        // const hashedPassword = await hashPassword(reciveUser?.password);
        //  reciveUser.password = hashedPassword
        let creatNewUser =await userModel.create(reciveUser)
        res.status(201).json(
        golobalResponseSend(true,"user creat a sucessfully",201,creatNewUser)
       )
    } catch (error) {
     res.status(400).json(
        golobalResponseError(false,"Validation error",400,error,stackError(error))
     )
       
    }
  

}

export const userModelController = {userCreat}