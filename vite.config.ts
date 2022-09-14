import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_APP_SERVER_URL: any = loadEnv(
    mode,
    process.cwd()
  ).VITE_APP_SERVER_URL;

  console.log(
    "mode: " + mode + "  VITE_APP_SERVER_URL: " + VITE_APP_SERVER_URL
  );
  const result = {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue"],
        dts: "src/auto-import.d.ts",
      }),
    ],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: VITE_APP_SERVER_URL,
          changeOrigin: true,
          secure: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"), // path记得引入
      },
    },
    envDir: "./env",
    envPrefix: ["VITE_", "DZ_"],
    build: {
      manifest: true,
      outDir: `./dist/${mode}`,
    },
  };
  return result;
});
