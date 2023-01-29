const path = require("path");

const express = require("express");

const adminData = require("./admin");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    // views folder and pug templating engine already defined as defaults
    res.render("shop", {
        products: adminData.products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: adminData.products.length > 0,   // Handlebars can't run logic so must be done here
        activeShop: true,
        productCSS: true, 
    });
});

module.exports = router;
