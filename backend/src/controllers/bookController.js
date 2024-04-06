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

module.exports = {
  addBook
};
