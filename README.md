# Zerodha-Inspired Stock Trading Platform

A full-stack stock trading application inspired by the Zerodha trading experience. This project was built to practise and demonstrate frontend development, backend API development, authentication, database integration, and order/position management using the MERN stack.

> **Disclaimer:** This is an educational project inspired by the user experience of Zerodha. It is not affiliated with Zerodha and does not provide real brokerage or financial services.

## Overview

The application is organised into two main parts:

- **Frontend:** React-based user interface for interacting with the trading application.
- **Backend:** Node.js and Express API connected to MongoDB for authentication and storing order-related data.

## Features

- **User authentication:** Signup, login, verification, and logout endpoints.
- **Trading interface:** User-facing interface inspired by an online stock-trading platform.
- **Order management:** Create and save order/position records.
- **Order history:** Retrieve orders associated with a particular user.
- **Position management:** Remove a saved position.
- **Database integration:** MongoDB with Mongoose models.
- **Responsive UI components:** React components and Material UI.
- **Data visualisation:** Chart.js integration for chart-based presentation.

## Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React.js, React Router |
| UI | Material UI, Emotion, React Icons |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | bcrypt, JSON Web Tokens, cookies |
| API communication | Axios |
| Charts | Chart.js, react-chartjs-2 |
| Development tools | Git, GitHub, Nodemon |

## Repository Structure

```text
Zerodha-MERN_STACK/
├── backend/
│   ├── controllers/
│   ├── model/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- A MongoDB database (local MongoDB or MongoDB Atlas)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Priyanshurawatofficial/Zerodha-MERN_STACK.git
cd Zerodha-MERN_STACK
```

### 2. Configure and start the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

`MONGO_URL` should contain your MongoDB connection string. Keep credentials and other secrets in environment variables; never commit your real `.env` file.

Start the backend:

```bash
npm start
```

The backend code currently listens on port `3000`.

### 3. Configure and start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm start
```

The React development server will display its local URL in the terminal (commonly `http://localhost:3000`). If the backend and frontend use the same local port, configure the frontend development port or backend port so they do not conflict.

Make sure the frontend API requests point to the backend URL used in your local setup. Check the API configuration in the source before running the application.

## Backend API Routes

The backend currently defines the following routes:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/signup` | Register a user |
| `POST` | `/login` | Authenticate a user |
| `GET` | `/verification` | Verify the authenticated user/session |
| `POST` | `/logout` | Log out |
| `POST` | `/newOrder` | Save an order/position |
| `GET` | `/allOrders?userid=<user-id>` | Retrieve a user's orders |
| `DELETE` | `/removePosition/:id` | Remove a position by ID |

## Environment Variables

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `PORT` | Port value declared in the backend environment; the current server code uses port `3000` directly |

Do not publish database credentials, authentication secrets, or private tokens.

## Learning Outcomes

Working on this project provided practical experience with:

- Structuring a full-stack React and Express application.
- Building and consuming REST API endpoints.
- Connecting an Express backend to MongoDB using Mongoose.
- Implementing authentication-related backend flows.
- Persisting and retrieving user-specific order data.
- Managing frontend state and presenting data through reusable UI components.

## Future Improvements

- Add live market-data integration from a reliable market-data provider.
- Improve input validation and API error handling.
- Add more detailed portfolio analytics and interactive charts.
- Add automated tests for frontend components and backend routes.
- Improve deployment configuration and document production environment variables.

## Author

**Priyanshu Rawat**

- GitHub: [@Priyanshurawatofficial](https://github.com/Priyanshurawatofficial)
- LinkedIn: [Priyanshu Rawat](https://www.linkedin.com/in/priyanshu-rawat-86063844a/)

---

If you find this project useful, feel free to explore the repository and share feedback.
