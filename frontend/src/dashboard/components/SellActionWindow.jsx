import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ stock }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [username, setUsername] = useState("");
  const [totalPrice, setTotalPrice] = useState(stock?.price || 0);

  const { closeSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get("https://zerodha-mern-stack.onrender.com/verification", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status) setUsername(res.data.user_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (stock) setTotalPrice((stock.price * stockQuantity).toFixed(2));
  }, [stockQuantity, stock?.price]);

  if (!stock) return null; // <-- move this AFTER all hooks

  const handleSellClick = async () => {
    axios
      .post("https://zerodha-mern-stack.onrender.com/newOrder", {
        name: stock.name,
        price: stock.price,
        avg: stock.avg,
        percent: stock.percent,
        isDown: stock.isDown,
        net: stock.net,
        day: stock.day,
        isLoss: stock.isLoss,
        qty: stockQuantity,
        product: stock.product,
        mode: "SELL",
        userid: username,
      })
      .then(() => {
        console.log("new sell order inserted");
        closeSellWindow();
      })
      .catch((e) => {
        console.log("error is----", e);
      });
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  const handleQuantityChange = (e) => {
    const qty = Number(e.target.value);
    setStockQuantity(qty > 0 ? qty : 1);
  };

  return (
    <div className="sell-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <h3>{stock.name}</h3>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min={1}
              onChange={handleQuantityChange}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price per unit</legend>
            <input
              type="number"
              name="price"
              id="price"
              value={stock.price}
              readOnly
            />
          </fieldset>
          <fieldset>
            <legend>Total Price</legend>
            <input
              type="number"
              name="totalPrice"
              id="totalPrice"
              value={totalPrice}
              readOnly
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{totalPrice}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;