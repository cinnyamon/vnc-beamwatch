import dotenv from "dotenv-esm";
import { createServer } from "node:http";
import app from "./app.js";
dotenv.config();

// eslint-disable-next-line no-undef
console.log(process.env.PORT);

const main = () => {
  const server = createServer(app);
  // const io = new (server, {
  //   cors: {
  //     origin: process.env.CORS_ORIGIN,
  //   },
  //   adapter: createAdapter(pubClient, subClient),
  // });

  // io.on("connection", async (socket) => await useSockets(socket, io));

  server.listen(process.env.PORT, "0.0.0.0", (err) => {
    if (err) {
      console.error("Error starting server on port", err);
      return;
    }
    console.log("Server running on port", process.env.PORT);
  });
};

main();
