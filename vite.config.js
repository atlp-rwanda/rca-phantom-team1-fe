import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// const $PORT = process.env.PORT || 5173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
