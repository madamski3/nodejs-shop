const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set templating engine
// "view engine" is a reserved keyword but set() can be used to set vars as well
app.set("view engine", "pug");
app.set("views", "views"); // can change default path node looks for html

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
