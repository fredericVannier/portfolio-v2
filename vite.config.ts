import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Temporary plugin — allows JSX in .js files during migration to .tsx
const jsxInJsPlugin = {
  name: "jsx-in-js",
  async transform(code: string, id: string) {
    if (!id.match(/src\/.*\.js$/)) return null;
    const { transform } = await import("esbuild");
    const result = await transform(code, { loader: "jsx", jsx: "automatic", sourcemap: false });
    return { code: result.code, map: null };
  },
};

export default defineConfig({
  plugins: [jsxInJsPlugin, react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["import", "global-builtin", "color-functions"],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
