import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook, getBooks } from "../features/book/bookSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publicationYear: "",
    gender: "",
    isFavorite: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const { books, status } = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevbook) => ({
      ...prevbook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateBook({ ...book, id: params.id }))
    } else {
      dispatch(addBook({
        ...book
      }))
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id && status === "succeeded") {
      const foundBook = books.find((book) => book._id === params.id);
      if (foundBook) {
        setBook(foundBook);
      } else {
        console.log("Libro no encontrado");
      }
    }
  }, [params, books, status]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`; 
    }
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`; 
    }
    return `${year}-${month}-${day}`;
  };
  
  const formattedPublicationYear = book.publicationYear ? formatDate(new Date(book.publicationYear)) : '';

  return (
    <div className="bg-white h-screen">
      <div className="flex items-center justify-center h-auto py-10">
        <form onSubmit={handleSubmit} className="mx-auto min-w-[320px] ">
          <div >
            <label className="block text-sm" htmlFor="title">
              Titulo
            </label>
            <input
              className="w-full p-2 rounded-md  border-gray-400 border-solid border-2 mb-2"
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="author">
              Autor
            </label>
            <input
              className="w-full p-2 rounded-md border-gray-400 border-solid border-2 mb-2"
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="publicationYear">
              Año de publicación
            </label>
            <input
              type="date"
              id="publicationYear"
              name="publicationYear"
              value={formattedPublicationYear}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-md border-gray-400 border-solid border-2 mb-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="gender">
              Genero
            </label>
            <input
              className="w-full p-2 rounded-md  border-gray-400 border-solid border-2 mb-2"
              type="text"
              id="gender"
              name="gender"
              value={book.gender}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-700 hover:bg-teal-900 text-white font-bold rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>

  );
}