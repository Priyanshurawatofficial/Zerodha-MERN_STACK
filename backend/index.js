require('dotenv').config();
const express = require("express")
const app=express();
const mongoose=require("mongoose")
const passport=require("passport")
const passport_local=require("passport-local")
const passport_local_mongoose=require("passport-local-mongoose")
const bodyparser=require("body-parser")
const cors=require("cors")
const bcrypt=require("bcrypt")

const cookieParser=require("cookie-parser")

const global_port=process.env.PORT;
const mongo_url=process.env.MONGO_URL;
const local_port=3000;

const {SignUp} =require("./controllers/AuthController");
const {Login} =require("./controllers/AuthController")
const {userVerification}=require("./controllers/AuthController");


const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel}=require("./model/OrdersModel");

app.use(cors(
    {
  origin: "http://localhost:3000", // or wherever your frontend runs
  credentials: true
    }
));
app.use(bodyparser.json())
app.use(cookieParser());


app.listen(local_port,()=>{
    console.log("server: 3000 started");
    mongoose.connect(mongo_url)
    .then(
        console.log("Db connected successfully")
    )
    .catch((e)=>{
      console.log("Error is --",e);
    })
})

app.get("/",(req,res)=>{
    console.log("New window opened");
    res.send("Opened window")
})

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
     let newOrder=new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
     });
     await newOrder.save();
     res.send("order saved")
})



app.get("/allOrders",async(req,res)=>{
    let allOrders=await OrdersModel.find({});
    res.json(allOrders);
})  


app.post("/signup",SignUp);
app.post("/login",Login);
app.post("/verification",userVerification);