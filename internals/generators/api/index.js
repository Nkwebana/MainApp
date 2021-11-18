/**
 * Container Generator
 */

module.exports = {
  description: "Create a new provider",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Auth",
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return "The name is required";
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const componentTemplate = "./api/api.js.hbs"; // eslint-disable-line no-var

    const actions = [
      {
        type: "add",
        path: "../../src/api/{{properCase name}}/index.js",
        templateFile: componentTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/src/api/",
    });

    return actions;
  },
};
