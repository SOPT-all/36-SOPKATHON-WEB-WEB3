import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@apis", replacement: resolve(__dirname, "src/shared/apis") },
      { find: "@assets", replacement: resolve(__dirname, "src/shared/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/shared/components"),
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "src/shared/constants"),
      },
      { find: "@hooks", replacement: resolve(__dirname, "src/shared/hooks") },
      { find: "@routes", replacement: resolve(__dirname, "src/shared/routes") },
      { find: "@styles", replacement: resolve(__dirname, "src/shared/styles") },
      { find: "@utils", replacement: resolve(__dirname, "src/shared/utils") },
    ],
  },
});
