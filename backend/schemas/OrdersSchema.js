const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    price: Number,
    avg: Number,
    percent: String,
    isDown: Boolean,
    net: String,
    day: String,
    isLoss: Boolean,
    qty: Number,
    product: String,
    mode: String,
    user: {
        type: String,
        default: "user1"
    }
});

module.exports = { OrdersSchema };