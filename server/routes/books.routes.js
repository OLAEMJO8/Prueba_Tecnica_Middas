import { Router } from "express";

import { getBooks, getBook} from '../controllers/books.controller.js';


const router = Router();

// GET all Books
router.get("/", getBooks);

// GET one Book
router.get("/:id", getBook);


export default router;