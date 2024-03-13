import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:4000/api/books/";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  const response = await axios.post(baseURL, book);
  return response.data;
});

export const updateBook = createAsyncThunk("books/updateBook", async (book) => {
  const response = await axios.put(`${baseURL}${book.id}`, book);
  return response.data;
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  await axios.delete(`${baseURL}${id}`);
  return id;
});

export const addFavorite = createAsyncThunk(
  "books/addFavorite",
  async (id) => {
    const response = await axios.put(`${baseURL}${id}/addFavorite`);
    return response.data;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(
          (book) => book.id === action.payload.id
        );
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        const bookId = action.meta.arg;
        const index = state.books.findIndex(
          (book) => book._id === bookId
        );
        if (index !== -1) {
          state.books[index].isFavorite = !state.books[index].isFavorite;
        }
      });
  },
});

export default bookSlice.reducer;
