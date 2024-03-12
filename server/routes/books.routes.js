import { Router } from "express";

import { getBooks, getBook, createBook, updateBook, deleteBook} from '../controllers/books.controller.js';


const router = Router();

// GET all Books
router.get("/", getBooks);

// GET one Book
router.get("/:id", getBook);

// ADD a new Book
router.post("/", createBook);

// UPDATE a Book
router.put("/:id", updateBook);

// DELETE a Book
router.delete("/:id", deleteBook);

export default router;