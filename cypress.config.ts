import { defineConfig } from "cypress";
import * as fs from "fs";

export default defineConfig({
  env: {
    indexUrl: "./cypress/fixtures/task.html",
  },
  e2e: {
    baseUrl: null,
    setupNodeEvents(on, config) {
      on("task", {
        readTxtFile(filename) {
          return fs.readFileSync(filename, "utf8");
        },
      });
    },
  },
});
