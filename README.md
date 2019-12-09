1 - configurar Debug, (add configuration);

  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
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
2 - Organizar arquivos após configuração eslint/prettier;
obs: (src e o dir do projeto)
yarn eslint --fix src --ext .js

3 - install extenions 'EditorConfig';
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

4 - utilisando sequelize-cli para gerar migrate;
//tabala 'users'
yarn sequelize migration:create --name=create-users
