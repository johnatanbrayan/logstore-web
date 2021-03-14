# Logstore Web

Este projeto foi gerado com [Angular CLI] (https://github.com/angular/angular-cli) versão 10.0.7.

## Como usar:
### Back
  Siga as instruções desse repositorio (backend - https://github.com/gustavoaalves/logstore).

### Front
* Instale [node] (https://nodejs.org/en/download/) ou [yarn] (https://classic.yarnpkg.com/en/docs/install/) na máquina local.
* Instale o angular `npm install -g @angular/cli` ou `yarn add -g @angular/cli`. 
* Instale as dependências `npm install` ou `yarn install`
* Execute `npm run start` ou` yarn run start` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

# Desafio:

## Premissas:

* [x] 1. Todo o conteúdo do desenvolvimento deverá estar disponível no seu repositório do github

* [x] 2. Utilizar bootstrap com jquery para frontend
   a. Poderá ser utilizado angular (não JS) como diferencial, mas não será cobrado
* [x] 3. Criar um README com instruções para utilizar seu frontend.

* [x] 4. Respeitar a arquitetura (stack) já disponibilizada no projeto logstore (backend - https://github.com/gustavoaalves/logstore)

## Requisitos:

1. Criar uma tela em bootstrap onde seja possível visualizar os registros da entidade Log
   * [x] a. Usar table para apresentar os registros
   * [x] b. Os registros devem ser apresentados em ordem decrescente de `ocorrências`
   * [x] c. Criar um botão onde será possível acessar a tela abaixo

2. Criar uma tela possível realizar a inserção dos dados na entidade Log
   * [x] a. Os dois campos serão obrigatórios
   * [x] b. O formulário deverá validar e realizar a ação de salvar ao dar ‘enter’ em qualquer campo
   * [x] c. Após salvar deve voltar a tela acima

3. Adicionar um botão que permita ao usuário deletar alguns registros de logs Desafio (Opcional):
   * [ ] Adaptar o projeto logstore (backend - https://github.com/gustavoaalves/logstore) com o objetivo de implementar uma rotina que faça a leitura de logs de uma pasta do servidor.
