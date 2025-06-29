require('dotenv').config();
const express = require("express")
const app=express();
const mongoose=require("mongoose")
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
const {Logout}=require("./controllers/AuthController");


const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel}=require("./model/OrdersModel");

app.use(cors({
  origin: 'http://localhost:3001', // your frontend URL
  credentials: true
}));
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

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    price: req.body.price,
    avg: req.body.avg,
    percent: req.body.percent,
    isDown: req.body.isDown,
    net: req.body.net,
    day: req.body.day,
    isLoss: req.body.isLoss,
    qty: req.body.qty,
    product: req.body.product,
    mode: req.body.mode,
    user: req.body.userid,
  });
  console.log("new order is", newOrder);
  await newOrder.save();
  res.send("order saved");
});



app.get("/allOrders", async (req, res) => {
  const userid = req.query.userid;
  let userOrders = await OrdersModel.find({ user: userid });
  res.json(userOrders);
});



app.post("/signup",SignUp);
app.post("/login",Login);
app.get("/verification",userVerification);
app.post("/logout",Logout);
app.delete("/removePosition/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await OrdersModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Position removed" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error removing position" });
  }
});


