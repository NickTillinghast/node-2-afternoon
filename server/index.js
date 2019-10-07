const express = require("express");
const app = express();
// const data = require();
const controller = require("./controllers/messages_controller");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", controller.create);

app.get("/api/messages", controller.read);

app.put("/api/messages/:id", controller.update);

app.delete("/api/messages/:id", controller.delete);

const port = 3001;
app.listen(port, () => console.log(`app listening on ${port}`));
