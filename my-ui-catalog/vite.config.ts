import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const normalizeBasePath = (basePath: string) => {
  if (!basePath) return "/";

  // Allow "./" so the app can run from the file system or any subdirectory.
  if (basePath.startsWith(".")) {
    return basePath.endsWith("/") ? basePath : `${basePath}/`;
  }

  const trimmed = basePath.replace(/^\/*/, "").replace(/\/*$/, "");
  return trimmed.length ? `/${trimmed}/` : "/";
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  const base = normalizeBasePath(process.env.VITE_BASE_PATH ?? "/");

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
