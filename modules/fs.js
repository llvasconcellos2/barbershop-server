const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "teste"), (error) => {
  if (error) return console.log("ERROR MKDIR: ", error);
  console.log("Directory created.");
});

fs.writeFile(
  path.join(__dirname, "teste", "arquivo.html"),
  "<h1>Hello Node.js!</h1>\n",
  (error) => {
    if (error) return console.log("ERROR FILE: ", error);
    console.log("File created!");
  },
);

fs.appendFile(
  path.join(__dirname, "teste", "arquivo.html"),
  "<p>Append file!</p>\n",
  (error) => {
    if (error) return console.log("ERROR FILE: ", error);
    console.log("File appended!");
  },
);

fs.readFile(
  path.join(__dirname, "teste", "arquivo.html"),
  "utf-8",
  (error, data) => {
    if (error) return console.log("ERROR READFILE: ", error);
    console.log("FILE CONTENT:", data);
  },
);
