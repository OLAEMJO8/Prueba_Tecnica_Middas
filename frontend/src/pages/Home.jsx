import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getBooks, deleteBook, addFavorite } from "../features/book/bookSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { books } = useSelector(state => state.books);

  useEffect(() => {
    if (!books.lenght) {
      dispatch(getBooks());
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleFavoriteAdd = (id) => {
    dispatch(addFavorite(id));
  };
  const handleUpdate = (id, updatedData) => {
    dispatch(updateBookById({ id, updatedData }));
  };
  return (
    <div className="bg-white p-4">
    <div className="flex items-center justify-center h-full">

      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img src="/middas_app_logo.png" to="/" alt="Logo" />
          <div className="text-4xl mb-4 text-black">Sin libros</div>

          <a href="/add" className="bg-teal-950 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0 mr-4">Agregar libros</a>


        </div>

      ) : (
        <div className="w-4/6 text-white">
          <div className="grid grid-cols-3 gap-3">
            {books.map(book => (
              <Card
                key={book._id}
                book={book}
                handleDelete={handleDelete}
                handleFavoriteAdd={handleFavoriteAdd}
              />
            ))}
          </div>
        </div>
      )}

    </div>
    </div>

  );
}
