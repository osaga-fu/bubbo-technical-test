const express = require("express");
const { addBook } = require("../controllers/bookController");

const router = express.Router();

router.post("/books", addBook);

module.exports = {
    routes: router
};
