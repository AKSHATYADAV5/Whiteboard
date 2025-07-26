const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/whiteboard";
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
