const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q5thd1',
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
