const catchError = require('../utils/catchError');
const UsersServices = require('../services/user.services')
const User = require('../models/User');
const { uploadToCloudinary } = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
});

const createUser = catchError(async(req, res, next) => {
    try {
        const file = req.file;
        const { url } = await uploadToCloudinary(file)
        const { id,
            first_name,
            last_name,
            email,
            password
            } = req.body;
        
        console.log(req.file)
        const user = await UsersServices.create({
            id: +id,
            first_name,
            last_name,
            email,
            password,
            imageurl: url
        });
        if(user) {
            res.status(201).json({
                succes:true,                
                message:'User created',
                user
              
            })
        }

     

    } catch (error) {
        next(error)
    }
  
});

module.exports = {
    getAll,
    createUser
}