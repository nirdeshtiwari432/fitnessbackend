import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import planRoutes from "./routes/plan.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://fitnessbyai-j6ee.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());

app.use("/api/plan", planRoutes);

app.get("/", (req, res) => {
  
  res.json({ status: "AI Fitness Backend Running",key:process.env.OPENROUTER_API_KEY });
});

// IMPORTANT: Export app instead of listening
export default app;
