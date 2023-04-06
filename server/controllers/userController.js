const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

exports.createUser = async (req,res) => {
    console.log(req.body);
    const {firstname,lastname,email,password,about} = req.body;
    console.log(firstname,lastname,email,password,about);
    if(!firstname || !lastname || !email || !password || !about){
        return res.status(300).json({message: "Some fields are missing."});
    }
    try{
        const encryptedPassword = await bcrypt.hash(password,10);
        let user= userSchema.create({firstname,lastname,email,password:encryptedPassword,about});
        if(!user){
            res.status(500).json({message: "Unable to create user"});
        }
        res.status(200).json({message: "Success",user});
    }
    catch (error){
        console.log(error);
        return res.status(500).json({message: "Something went wrong"});
    }
} 

exports.getAllUsers = async (req,res) => {
    try{
        const users = await userSchema.find();
        res.status(200).json({users})
    }
    catch(error) {
        console.log(error);
        res.json({
            message: "Something went wrong"
        })
    }
}