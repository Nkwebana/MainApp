/**
 * Stpre Generator
 */

/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Create a new store item',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'User',
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate = './store/store.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../../src/store/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        skipIfExists: true,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/src/store/',
    });

    return actions;
  },
};
