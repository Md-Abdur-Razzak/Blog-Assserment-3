import { RequestHandler } from "express";
import userModel from "./user.model";
import { golobalResponseSend } from "../../utilis/golobal.respons.send";
import { golobalResponseError } from "../../utilis/golobalError";
import { stackError } from "../../utilis/stackError";
import jwt from "jsonwebtoken"
import config from "../../config";
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

const loginUser: RequestHandler = async (req, res) => {
    try {
        const { email, password }: { email: string; password: string } = req.body;

        // Validate request body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
                statusCode: 400,
            });
        }

        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
                statusCode: 401,
                error: { details: "User not found" },
            });
        }

        // Verify password
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) {
        //     return res.status(401).json({
        //         success: false,
        //         message: "Invalid credentials",
        //         statusCode: 401,
        //         error: { details: "Password mismatch" },
        //     });
        // }

        // Generate JWT token
        
        const token = jwt.sign(
            {email: user.email,password:user?.password},
            config.jwt_secret as string, // Ensure JWT_SECRET is defined in your environment variables
            { expiresIn: '5d' }
        );

        // Send success response
        res.status(200).json({
            success: true,
            message: "Login successful",
            statusCode: 200,
            data: { token },
        });
    } catch (error) {
        res.status(401).json(
            golobalResponseError(false,"Invalid credentials",401,error,stackError(error))
        );
    }
};


export const userModelController = {userCreat,loginUser}