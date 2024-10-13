import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Node.js 내장 모듈

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @tv/components를 packages/tv 경로로 설정
      "@tv/ui": path.resolve(__dirname, "../../packages/tv/src"),
    },
  },
  optimizeDeps: {
    include: ["@tv/ui"], // HMR을 지원하기 위해 명시적으로 포함
  },
});
