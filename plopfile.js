module.exports = function(plop) {
  plop.setGenerator('cc', {
    description: 'create class component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'component path',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{name}}.js',
        templateFile: 'plop/class-component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{name}}.module.scss',
        templateFile: 'plop/css-module.hbs',
      },
    ],
  })

  plop.setGenerator('fc', {
    description: 'create functional component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'component path',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{name}}.js',
        templateFile: 'plop/functional-component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}/{{name}}.module.scss',
        templateFile: 'plop/css-module.hbs',
      },
    ],
  })
}
