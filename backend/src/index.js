// ye dotenv ko import (require se direct hojata hai pr consistent nhi hai woh) krnwane ke lie config({}) krna padhta hai or package.json mai script mai jake run vle dev mai -r dotenv/config --experimental-json-modules add krna hota hai.
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(`MONGODB connection failed`, err);
  });
