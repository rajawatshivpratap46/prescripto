import validator from "validator"
import bycrypt from "bcrypt"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js"
// API for adding doctor
const addDoctor= async (req,res)=>{
   
     try{

        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
        const imageFile =req.file

        // checking for all data to add doctor
        if(! name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false,message:"Missing Details"})


        }

        // validating email format
        if( !validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email address"})
        }

        // validating strong password 
        if(password.length < 8){
            return res.json({success:false,message:"Please enter a strong password with at least 8 characters"})

        }

        // hashing doctor password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"})
            const imageUrl = imageUpload.secure_url

            const doctor = {
                name,
                email,
                password: hashedPassword,
                image: imageUrl,
                speciality,
                degree,
                experience,
                about,
                fees,
                address: JSON.parse(address),
                date: Date.now(),
                available: true
            }

            const newDoctor = new doctorModel(doctorData)
            await newDoctor.save()
           
            res.json({success:true, message:"Doctor added successfully"})

        
     } catch(error){
        console.error(error)
        res.status(500).json({success:false, message:error.message})
     }
}

export { addDoctor }