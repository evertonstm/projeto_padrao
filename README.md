1 - configurar Debug, (add configuration);

   "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "restart": true,
      "skipFiles": [
        "<node_internals>/**"
      ],
      "protocol": "inspector"
    }
  ]

2 - Confuguração apos a instalação do eslint/prettier, altoFix;
❯ yarn add eslint -D
❯ yarn eslint --init
  How would you like to use ESLint?
   - To check syntax, find problems, and enforce code style.
  What type of modules does your project use?
   - JavaScript modules (import/export)
  Which framework does your project use?
   - None of these
  Does your project use TypeScript?
   - Yes
  Where does your code run?
   - Node
  How would you like to define a style for your project?
   - Use a popular style guide
  Which style guide do you want to follow?
  Airbnb: https://github.com/airbnb/javascript
  What format do you want your config file to be in?
   - JavaScript
  Would you like to install them now with npm?
   - Yes

  obs. (remover o arquivo "package-lock.json", arquivo de instalação npm, logo em seguida execute ❯ yarn do diretorio do projeto, para reinstalação das dependências.)

2.1 - No settings.json (arquivo do conf. do VsCode, em "preferences:Open Settings JSON")

 "eslint.packageManager": "yarn",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
  "eslint.validate": [
      {
        "language": "javascript",
        "autoFix": true
      },
      {
        "language": "javascriptreact",
        "autoFix": true
      },
      {
        "language": "typescript",
        "autoFix": true
      },
      {
        "language": "typescriptreact",
        "autoFix": true
      }
  ],
  "files.associations": {
    ".sequelizerc": "javascript"
  },

 Instale a extensão ESLint no VsCode,
 no arquivo .eslintrc.js


rules: {
    "class-methods-use-this":"off",
    "no-param-reassign":"off",
    "camelcase":"off",
    //variável vai ser criada e nao vai ser utilizada como 'next".
    "no-unused-vars":["error", { "argsIgnorePattern":"next" }]
  },

2.2 - instalar o prettier e dependências
❯ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

no .eslintrc
extends: [
    'Prettier'
  ],
  plugins:['prettier'],
rules:{
  "prettier/prettier":"error",
}

2.3 - No arquivo .prettierrc.js regras duplicadas;
{
  "singleQuote": true,
  "trailingComma":"es5"
}

2.4 - Organizar arquivos após configuração eslint/prettier;
obs: (src e o dir do projeto)
❯ yarn eslint --fix src --ext .js

3 - install extenions 'EditorConfig', crie .editorconfig na raiz do projeto;
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

4 - utilisando sequelize-cli para gerar migrate;
//tabala 'users'
❯ yarn sequelize migration:create --name=create-users

//Criando a tabela users
❯ yarn sequelize db:migrate

// desfazer uma migratons
❯ yarn sequelize db:migrate:undo

// desfazer todas as migrations
❯ yarn sequelize db:migrate:undo:all
