import cors from "cors";
import express from "express";
import { Server } from "socket.io";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/", (req, res) => {
  res.status(200).send({ message: "hiii" });
});

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.listen(4000);

io.on("connection", async (socket) => {
  socket.on("create-something", (e) => {
    console.log(e);
    io.emit("message", e);
  });
});

export default app;
