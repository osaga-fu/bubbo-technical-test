const express = require("express");
const { addBook } = require("../controllers/bookController");

const router = express.Router();

router.post("/book", addBook);

module.exports = {
    routes: router
};
