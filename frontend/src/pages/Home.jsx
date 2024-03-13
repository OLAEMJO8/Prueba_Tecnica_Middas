// Home.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getBooks, deleteBook, addFavorite } from "../features/book/bookSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { books } = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleFavoriteAdd = (id) => {
    dispatch(addFavorite(id));
  };

  return (
    <div className="bg-white h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <div className="w-4/6">
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
      </div>
    </div>
  );
}
