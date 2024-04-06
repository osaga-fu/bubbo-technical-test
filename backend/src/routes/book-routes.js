const express = require("express");
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = {
  routes: router,
};
