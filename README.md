<div align="center">
  <img alt="Rocketseat Logo" src="https://avatars1.githubusercontent.com/u/28929274?s=280&v=4" width="150" />
  <img alt="Github Logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" width="150" />
</div>

<h1 align="center">
  Save repositories - Back End
</h1>



## :pushpin: Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [uuidv4](https://github.com/thenativeweb/uuidv4)

## :computer: Projeto

Aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

## :collision: Rotas

__*GET*__  _/repositories_ rota responsável por listar todos os repositórios  
__*POST*__  _/repositories_ rota responsável adicionar um novo repositório  
__*PUT*__  _/repositories/id_ rota responsável por atualizar um repositório existente  
__*DELETE*__  _/repositories/id_ rota responsável por deletar um repositório conforme o id informado  
__*POST/LIKE*__  _/repositories/id/like_ rota responsável por adicionar um *"like"* ao id informado de um repositório existente  


## :point_down: Executando o projeto

No seu terminal copie e cole ou digite o comando abaixo:

```git
git clone https://github.com/jhowsantos/save-repositories-backend.git
````

Após realizar o clone acesse a pasta do projeto:

```git
cd save-repositories-backend
````

Logo em seguida digite o comando __*yarn*__ para baixar e atualizar as dependências do projeto:

```git
cd save-repositories-backend
````

Para executar o projeto digite em seu terminal o comando:

```terminal
yarn dev
````

e já conseguirá acessar as rotas disponiveis no projeto :punch:

---
Feito com coração, café e muito esforço :heart: :rocket: