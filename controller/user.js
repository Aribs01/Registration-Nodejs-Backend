const User = require('../models/User');
const asyncWrapper = require('../Middleware/async');


const getAllUsers = asyncWrapper ( async (req,res)=>{
   
       const users = await User.find({})
       res.status(200).json({users})
    
})

const createUser = async (req,res)=>{
    const user = await User.create(req.body)
    res.status(201).json({ user })
}

const getUsers = async (req,res)=>{
    try {
        const {id:userID} = req.params
        const task = await Task.findOne({_id:taskID})
if (!user){
    return res.status(404).json({msg:`no task with id ${userID}`})
}
    res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateUser = async (req,res)=>{
try {
    const {id:userID} = req.params
    const user = await User.findOneAndUpdate({_id:userID}, req.body,{
        new:true,
        runValidators:true
    })
    
res.status(200).json({user})

} catch (error) {
    res.status(500).json({msg:error})
}
}

module.exports = {
    getAllUsers, createUser, getUsers, updateUser
}