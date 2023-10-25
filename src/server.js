import http from "node:http";

// CommonJS => require
// ESModules => import/export

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recuso do back-end

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
