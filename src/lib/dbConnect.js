import mongoose from "mongoose";

async function dbConnect() {
  let uri;
  if (process.env.MODE === "production") {
    uri = process.env.MONGODB_URI;
  } else {
    uri = "mongodb://127.0.0.1:27017/portfolio";
  }
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
}

export default dbConnect;
