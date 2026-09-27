import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/job-recruitment";
    await mongoose.connect(connStr);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
