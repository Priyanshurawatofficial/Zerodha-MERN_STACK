import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/verification", { withCredentials: true })
      .then((res) => {
        if (res.data.status) setUsername(res.data.user_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!username) return;
    axios
      .get(`http://localhost:3000/allOrders?userid=${username}`, { withCredentials: true })
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  const handleClosePosition = (stock) => {
    if (!window.confirm(`Are you sure you want to close position for ${stock.name} (${stock.product})?`)) return;
    axios
      .delete(`http://localhost:3000/removePosition/${stock._id}`, { withCredentials: true })
      .then(() => {
        setAllPositions((prev) => prev.filter((item) => item._id !== stock._id));
      })
      .catch((err) => {
        alert("Failed to close position");
        console.log(err);
      });
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
              <th>Mode</th>
              <th>Day Chg.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profclass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profclass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.net}</td>
                  <td>
                    <span className={stock.mode === "BUY" ? "badge badge-buy" : "badge badge-sell"}>
                      {stock.mode}
                    </span>
                  </td>
                  <td>
                    <span
                      style={{
                        color: stock.isLoss ? "#e53935" : "#43a047",
                        fontWeight: "bold",
                      }}
                    >
                      {stock.day}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-grey"
                      onClick={() => handleClosePosition(stock)}
                    >
                      Close
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;