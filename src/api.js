const express = require("express");
const UserModel = require("./models/user.model");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Content Type: ${req.headers["content-type"]}`);
  console.log(`Request Date: ${new Date()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("users", { users });
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(8080, () => console.log("Express Server Running on 8080"));
