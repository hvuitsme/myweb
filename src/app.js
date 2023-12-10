const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
//auto restart server
// app.use(morgan('combined'))

// template engine
app.engine("hbs", engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./resources/views");

app.set("views", path.join(__dirname, "resources/views"));

// route init
route(app);

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
