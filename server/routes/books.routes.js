import { Router } from "express";

import { getBooks, getBook, createBook} from '../controllers/books.controller.js';


const router = Router();

// GET all Books
router.get("/", getBooks);

// GET one Book
router.get("/:id", getBook);

// ADD a new Book
router.post("/", createBook);

export default router;