const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ryh9tu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    video: true,
  },
});
