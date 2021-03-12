# Logstore Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Teste de desenvolvimento CINGO:

## Premissas:

1. Todo o conteúdo do desenvolvimento deverá estar disponível no seu repositório do github

2. Utilizar bootstrap com jquery para frontend
   a. Poderá ser utilizado angular (não JS) como diferencial, mas não será cobrado
3. Criar um README com instruções para utilizar seu frontend.

4. Respeitar a arquitetura (stack) já disponibilizada no projeto logstore (backend - https://github.com/gustavoaalves/logstore)

## Requisitos:

1. Criar uma tela em bootstrap onde seja possível visualizar os registros da entidade Log
   a. Usar table para apresentar os registros
   b. Os registros devem ser apresentados em ordem decrescente de `ocorrências`
   c. Criar um botão onde será possível acessar a tela abaixo

2. Criar uma tela possível realizar a inserção dos dados na entidade Log
   a. Os dois campos serão obrigatórios
   b. O formulário deverá validar e realizar a ação de salvar ao dar ‘enter’ em qualquer campo
   c. Após salvar deve voltar a tela acima

3. Adicionar um botão que permita ao usuário deletar alguns registros de logs
   Desafio (Opcional):
   Adaptar o projeto logstore (backend - https://github.com/gustavoaalves/logstore) com o objetivo de implementar uma rotina que faça a leitura de logs de uma pasta do servidor.
