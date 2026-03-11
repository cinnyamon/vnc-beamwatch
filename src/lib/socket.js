import { io } from "socket.io-client";

// add this import.meta.env.VITE_BACKEND_URL
export const socket = io(import.meta.env.VITE_BACKEND_URL, {
  transports: ["websocket"],
});
