import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./scss/variables.scss" as *;`,
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
