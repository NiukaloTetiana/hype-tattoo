import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        thank: resolve(__dirname, "src/thank.html"),
        notFound: resolve(__dirname, "src/not-found.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
    @use "variables" as *;
    @use "mixins" as *;
  `,
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
