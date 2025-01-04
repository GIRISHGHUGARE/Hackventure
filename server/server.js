// PACKAGES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const path = require('path')

// FILES
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes")

// DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDB();

// REST OBJECT
const app = express();

// const __dirname = path.resolve();

// MIDDLEWARES
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
};
if (process.env.NODE_ENV !== "production") {
    app.use(cors(corsOptions));
}
app.use(cookieParser()); // TO PARSE COOKIE
app.use(express.json());
app.use(morgan("dev")); // TO HAVE CONSOLE LOGS SUCCESS AND ERROR


// MAIN ROUTE
app.get("", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Varkari Sampraday Server!!"
    });
});

// OTHER ROUTES
//app.use("/api/v1/auth", userRoutes)


// PORT
const PORT = process.env.PORT || 8080;

// CONNECTION OF FRONTEND AND BACKEND FOR HOSTING
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "client/dist")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
//     });
// }

// LISTEN
app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`.bgGreen.white);
})