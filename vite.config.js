import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@assets/craze": fileURLToPath(
        new URL("./src/assets/craze", import.meta.url)
      ),
      "@assets/DevCards": fileURLToPath(
        new URL("./src/assets/DevCards", import.meta.url)
      ),
      "@assets/Eshop": fileURLToPath(
        new URL("./src/assets/Eshop", import.meta.url)
      ),
      "@assets/pakapaka": fileURLToPath(
        new URL("./src/assets/pakapaka", import.meta.url)
      ),
      "@assets/vcm": fileURLToPath(
        new URL("./src/assets/vcm", import.meta.url)
      ),
      "@assets/videos": fileURLToPath(
        new URL("./src/assets/videos", import.meta.url)
      ),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
