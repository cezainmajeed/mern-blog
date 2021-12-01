import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

export default Connection;
