const {userSchema} =require("../schemas/UserSchema");
const {model}=require("mongoose");
const bcrypt = require("bcrypt");


const User = model("user",userSchema);

module.exports={User};