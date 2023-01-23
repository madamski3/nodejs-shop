const path = require("path");

const express = require("express");

const adminData = require("./admin");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "shop.html"));

    // views folder and pug templating engine already defined as defaults
    res.render("shop", { products: adminData.products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
