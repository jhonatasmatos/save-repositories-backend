const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function verifyRepositoryExists(request, response, next) {
  
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0){
    return response.status(400).json({ error: 'Repository not found.'});
  }

  next();
}

app.get("/repositories", (request, response) => {

  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  
  const { title, url , techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  if(!isUuid(repository.id)){
    return response.status(400).json({ error: 'ID is not a valid uuid.' });
  }

  if(repository.likes !== 0){
    return response.status(400).json({ error: 'likes must start with 0.' });
  }

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", verifyRepositoryExists, (request, response) => {
  
  const { id } = request.params;
  const { title, url , techs } = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  const repository = {
    ...repositories[repositoryIndex],
    title,
    url,
    techs
  };

  repositories[repositoryIndex] = repository;

  return response.json(repository)
});

app.delete("/repositories/:id", verifyRepositoryExists, (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send()
});

app.post("/repositories/:id/like", verifyRepositoryExists, (request, response) => {
  
  const { id } = request.params;

  const repository = repositories.find(repo => repo.id === id);

  repository.likes += 1;

  return response.json(repository)
});

module.exports = app;
