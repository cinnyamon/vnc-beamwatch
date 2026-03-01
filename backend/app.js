import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// app.use(express.static(path.join(__dirname, "..", "dist")));
// app.use("/", (req, res) => {
//   res.status(200).send({ message: "hiii" });
// });

// const io = new Server({
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

export default app;
