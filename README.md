# MongoDB Commerce Project

# Contexto
O objetivo do projeto é praticar todos os conceitos aprendidos sobre **MongoDB** já aprendidos até o momento. A ideia é trabalhar com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.

As resoluções dos requisitos podem ser encontrados dentro da pasta `.challenges`.

## Tecnologias usadas

Desenvolvido usando:
> MongoDB, JavaScript ES6, Shell Script

## Habilidades treinadas

* Buscar documentos no banco  
* Usar filtros na busca  
* Deletar documentos conforme filtro  
* Contar documentos compreendidos nos filtros pedidos  
* Inserir documentos no banco
* Utilizar o método `updateOne()` e `updateMany()`
* Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`
* Renomear campos e remover campos
* Incorporar dados aos documentos através de arrays
* Utilizar os operadores `$pop`, `$pull` e `$push`  
* Utilizar o operador `$addToSet`
* Utilizar os operadores `$each`, `$slice` e `$sort`
* Utilizar o operador `$all` para filtrar documentos
* Utilizar o operador `$elemMatch` para filtrar documentos
* Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays
* Utilizar o operador `$expr` para criar expressões de agregação
* Utilizar expressões regulares e o operador `$regex` para buscar documentos
* Utilizar o operador `$mod`

## Clonando o repositório

1. Faça o clone
  * `git clone git@github.com:juan-formoso/mongodb-commerce-project.git`.
  * Entre na pasta do repositório clonado:
    * `cd mongodb-commerce-project`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `main`
  * `git checkout -b my-new-branch`

### Instruções para restaurar o banco de dados `commerce`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `commerce`:
   ```sh
   DBNAME=commerce ./scripts/resetdb.sh assets/produtos
   ```

- A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

---

### Realizando os testes

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:

```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `commerce`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `commerce` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️
