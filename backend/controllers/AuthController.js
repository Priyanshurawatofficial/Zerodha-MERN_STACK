const {User}=require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt=require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.SignUp=async (req , res , next)=>{
    try{
        const {email,password,username,createdAt} =req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            return res.json({message:"User already exists, just login!!"})
        }
        console.log("Request Body:", req.body);

        const user=await User.create({email,username,password,createdAt})
         
        const token = createSecretToken(user._id);
     
        res.cookie("token", token, {
      httpOnly: true,
  sameSite: "none",
  secure: true
    });


     res.status(201).json({ message: "Signup successful", success:true, user});
     next();
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong during signup" });
  }
    }




module.exports.Login=async(req,res,next)=>{
  try{
    const {email,password}=req.body;
    if(!email || !password){
      return res.json({message:"All fields are required"})
    }
   
     const user=await User.findOne({email});
     if(!user){
      return res.json({message:'Not registered, Please Login !!!'});
     }
     const auth=await bcrypt.compare(password,user.password);
     if(!auth)
     {
      return res.json({message:"Incorrect password or email"})
     }
    const token=createSecretToken(user._id);
      res.cookie("token", token, {
       httpOnly: true,
       sameSite: "none",
       secure: true
     });
      res.status(201).json({ message: "User logged in successfully", success: true });
     next()

  }catch(error){
    console.error(error);
  }

}





module.exports.userVerification = (req, res) => {
  console.log("Verification request received");
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      console.log(data)
      console.log(user)
      if (user) return res.json({ status: true, user: user.username,user_id:user._id })
      else return res.json({ status: false });
    }
  })
}

module.exports.Logout = (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.status(200).json({ message: "Logged out successfully" });
};





