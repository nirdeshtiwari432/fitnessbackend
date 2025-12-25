import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import planRoutes from "./routes/plan.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/plan", planRoutes);

app.get("/", (req, res) => {
  res.json({ status: "AI Fitness Backend Running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
