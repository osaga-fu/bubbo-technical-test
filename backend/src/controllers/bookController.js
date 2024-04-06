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

const getBookById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await firestore.collection("books").doc(id);
    const data = await book.get();
    if (!data.exists) {
      res.status(404).send("Book with given id not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const book = await firestore.collection("books").doc(id);
    await book.update(data);
    res.send("Book record updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await firestore.collection("books").doc(id).delete();
    res.send("Record deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};
