import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/books.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/books", router);

export default app;
