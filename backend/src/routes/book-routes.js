const express = require("express");
const { addBook, getAllBooks, getBookById } = require("../controllers/bookController");

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);

module.exports = {
  routes: router,
};
