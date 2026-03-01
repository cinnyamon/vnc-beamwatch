import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allow external connections
    cors: true, // needed if frontend connects to Socket.IO on a different port
    port: 5173,
    strictPort: false,
    allowedHosts: "all",
  },
});
