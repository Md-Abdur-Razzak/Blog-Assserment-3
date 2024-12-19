import { RequestHandler } from "express";
import userModel from "./user.model";
import { golobalResponseSend } from "../../utilis/golobal.respons.send";

const userCreat:RequestHandler = (req,res)=>{
    try {
        const reciveUser = req.body
        const creatNewUser = userModel.create(reciveUser)
       res.status(201).json(
        golobalResponseSend(true,"user creat a sucessfully",201,creatNewUser)
       )
    } catch (error) {
       console.log(error);
       
    }
  

}