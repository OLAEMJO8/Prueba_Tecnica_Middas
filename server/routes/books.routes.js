import { Router } from "express";

import { getBooks} from '../controllers/books.controller.js';


const router = Router();

// GET all Books
router.get("/", getBooks);

export default router;