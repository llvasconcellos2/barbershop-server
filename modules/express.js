const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.status(200);
  res.send("<h1>Home With Express</h1>");
});

app.get("/users", (req, res) => {
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
  res.status(200).json(users);
});

app.listen(8080, () => console.log("Express Server Running on 8080"));
