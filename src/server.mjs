import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import appointmentRoutes from "./routes/appointmentRoutes.mjs";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/appointments", appointmentRoutes);

app.use("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
