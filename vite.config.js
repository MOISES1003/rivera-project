import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // Redirige las solicitudes no encontradas a index.html
    },
});