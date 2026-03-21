const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>HOME PAGE</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Leonardo Lima de Vasconcellos",
        email: "llvasconcellos@gmail.com",
      },
      {
        name: "Denise Alcantara Bezerra de Lima",
        email: "deniselima@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server Listening at port ${PORT}!`));
