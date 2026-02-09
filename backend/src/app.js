import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.get("/", (req, res) => {
//   res.send("hello world welcome to something you will love it ");
// });

// ye main teen configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); // ye json form ki limit set krrha hai.

app.use(express.urlencoded({extended: true})); // parse form data
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js"

// http://localhost:8000/api/v1/users/ -> suffix
app.use("/api/v1/users", userRouter);

export { app };
