const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const { default: connectDB } = require("./config/db");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(morgan());
app.use(cors(
    origin = ""
))


app.use("", () => {
    console.log("Welcome to Server!!");
})

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`.bgCyan.white);
    connectDB()
})