import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { cpus } from "os";
import viteCompression from 'vite-plugin-compression';

const root = path.resolve(__dirname, "./src");

interface SourcemapExclude {
  excludeNodeModules?: boolean;
}
export function sourcemapExclude(opts?: SourcemapExclude): Plugin {
  return {
      name: "sourcemap-exclude",
      // eslint-disable-next-line consistent-return
      transform(code: string, id: string) {
          if (opts?.excludeNodeModules && id.includes("node_modules")) {
              return {
                  code,
                  // https://github.com/rollup/rollup/blob/master/docs/plugin-development/index.md#source-code-transformations
                  map: { mappings: "" },
              };
          }
      },
  };
}

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom', 'react-scripts'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), sourcemapExclude({ excludeNodeModules: true }), viteCompression({ algorithm: 'gzip' })],
  build: {
    minify: true,
    sourcemap: false,
    rollupOptions: {
      maxParallelFileOps: Math.max(1, cpus().length - 1),
      cache: false,
      output: {
        manualChunks: (path) => path.split('/').reverse()[path.split('/').reverse().indexOf('node_modules') - 1] // just a hack to get the next path segment of the last node_modules in path
      }
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(root, "./components"),
      "@assets": path.resolve(root, "./assets"),
      "@constants": path.resolve(root, "./constants"),
      "@pages": path.resolve(root, "./pages"),
      "@controller": path.resolve(root, "./controller"),
      "@routes": path.resolve(root, "./routes"),
      "@services": path.resolve(root, "./services"),
      "@utils": path.resolve(root, "./utils"),
    },
  },
});
