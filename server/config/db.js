const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = new mongoose.connect(process.env.MONGO_URL)
    } catch (error) {

    }
}

module.exports = connectDB