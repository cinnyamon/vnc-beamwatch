import dotenv from "dotenv-esm";
import { createServer } from "node:http";
import app from "./app.js";
import apiSocket from "./socket/apiSocket.js";
import { Server } from "socket.io";

dotenv.config();

console.log(process.env.PORT);

const main = () => {
  const server = createServer(app);

  const io = new Server(server, {
    // uses server for the same port
    cors: {
      origin: process.env.FRONTEND_URL, // set to the vite or localhost port for ur frontend
    },
    // adapter: createAdapter(pubClient, subClient), // redis stuff
  });

  io.on("connection", async (socket) => await apiSocket(socket, io));

  server.listen(process.env.PORT, "0.0.0.0", (err) => {
    if (err) {
      console.error("Error starting server on port", err);
      return;
    }
    console.log("Server running on port", process.env.PORT);
  });
};

main();
