import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/middasdb");
    console.log("DB conectada");
  } catch (error) {
    console.log(error);
  }
};

