# Api Nest.js com Autenticação JWT


## O que é uma API (Application Programming Interface - Interface de Programação da Aplicação )

### EXEMPLO DO GARÇOM

#### COZINHA = BACKEND -> SERVER SIDE - BANCOS DE DADOS, O LADO QUE O CLIENTE NÃO VÊ
#### VOCÊ NA MESA = FRONTEND -> CLIENT SIDE - INTERFACES DE USUÁRIO, BOTÕES E TELAS, VISÍVEIS AO CLIENTE

### A API É O QUE PERMITE A INTERMEDIAÇÃO DO BACKEND COM O FRONTEND

#### CADA IDA DO GARÇOM ATÉ A COZINHA, É UMA REQUEST - REQUISIÇÃO DE INFORMAÇÕES

#### CADA VOLTA DO GARÇOM DA COZINHA ATÉ A MESA, É UMA RESPONSE - RESPOSTA À REQUISIÇÃO DE INFORMAÇÕES

## HOJE 18/01/2023

###  VAMOS CRIAR UMA API NEST, CONECTÁ-LA AO BANCO DE DADOS, E NO FUTURO, INSERIR A PRÁTICA DO JWT

## ------------------------------------------------

# PASSO - A - PASSO PARA A CRIAÇÃO DE UMA API NEST.JS

### 1o - nest new "nome do projeto"

### 2o - escolher npm como gerenciador de pacotes

### 3o - esperar o download da aplicação

### 4o - após o download completo da aplicação, deve-se ir até a pasta com o nome do projeto que você criou.

### 5o - npm run start:dev (executar a aplicação, em modo de reload instantâneo)

### 6o - enquanto a aplicação se inicia, abrir insomnia (ou postman)

### 7o - abrir um novo terminal e criar um novo resource de usuários na mesma pasta do projeto que criei, com o comando "nest g resource users"

### 8o - ir na documentação do Nest.js e seguir passo a passo o processo para a criação da sincronia do TypeORM com meu banco de dados local em MySQL.

### 9o - criar pasta "database"

### 10o - criar arquivos "database.module.ts" e "database.providers.ts" e populá-los com as dicas e o passo a passo da documentação do typeorm

### 10.1o - manter a principio o syncronize como "false". mante-lo como true antes do tempo, significa criar uma tabela nova toda vez que você mexe nas sua entidade (neste caso, entidade User)

### 11o - configurar a entidade e o dto nos arquivos de entidade e dto, respectivamente, lembrando qye na dto não é necessário inserir o id, mas somente na entidade

### 12o - configurar o users.service.ts para disparar métodos de forma apropriada em nest.js, e não disparar as strings

### 13o - desabilitar o syncronize do typeorm de false pra true

### 14o - testar API (métodos de CRUD) no insomnia ou postman

### 15o - ser feliz!