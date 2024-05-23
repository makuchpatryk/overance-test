import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173/overance-test",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
