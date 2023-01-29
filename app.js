const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHandlebars = require("express-handlebars");

const app = express();

// register handlebars as templating engine
// app.engine(
//     "handlebars",
//     expressHandlebars.engine({ defaultLayout: "main-layout", layoutsDir: "views/layouts/", extname: "handlebars" })
// );

// set templating engine we will use
// "view engine" is a reserved keyword but set() can be used to set vars as well
app.set("view engine", "ejs");
app.set("views", "views"); // can change default path node checks for html

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
