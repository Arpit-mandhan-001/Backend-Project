import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Database connection successfull", `DB-HOST: ${connectionInstance}`);
  } catch (error) {
    console.log("Couldn't connect to Database", error);
    process.exit(1);
  }
};


export default connectDb;