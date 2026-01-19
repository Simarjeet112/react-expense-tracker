import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB(); // ⬅️ must finish FIRST

    console.log("MongoDB readyState:", mongoose.connection.readyState); // should be 1

    // routes AFTER DB connection
    app.use("/api/expenses", expenseRoutes);

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
};

startServer();
