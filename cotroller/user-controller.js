import { response } from "express";
import User from "../model/user.js";
export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
        return;
    } catch (error) {
      return  response.status(500).json(error);
    }
}

export const getUsers=async(Request,response)=>{
    try{
const users =await User.find({})
return response.status(200).json(users);
    }catch{
 return response.status(500).json(error)
    }
}