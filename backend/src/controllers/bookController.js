"use strict";

const Book = require("../models/book");
const firestore = require("../../config/db");

const addBook = async (req, res, next) => {
  try {
    const data = req.body;
    const book = await firestore.collection("books").doc().set(data);
    res.send("Record saved successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await firestore.collection("books");
    const data = await books.get();
    const booksArray = [];

    if (data.empty) {
      res.status(404).send("No book found");
    } else {
      data.forEach((doc) => {
        const book = new Book(
          doc.id,
          doc.data().title,
          doc.data().author,
          doc.data().year,
          doc.data().photo_url
        );
        booksArray.push(book);
      });
      res.send(booksArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addBook,
  getAllBooks,
};
