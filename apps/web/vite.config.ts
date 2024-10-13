import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  root: "apps/web", // 앱 디렉토리를 루트로 설정 (선택사항)
});
