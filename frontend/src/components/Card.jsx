import React from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function Card({ book, handleDelete, handleFavoriteAdd }) {
  return (
    <div key={book._id} className="bg-teal-700 p-4 rounded-md md:min-w-1/4 lg:min-w-1/5 xl:min-w-1/6 md:max-w-1/2 lg:max-w-1/4 xl:max-w-1/5">
      <div className="flex justify-between">

        <div className="font-bold text-xl mb-2">{book.title}</div>
        <button onClick={() => handleFavoriteAdd(book._id)}>
          {book.isFavorite ? "❤️" : "🖤"}
        </button>

      </div>
      <p className="mb-2">
        <span className="font-semibold">Autor:</span> {" "}
        {book.author}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Año de publicación:</span>
        {" "}
        {formatDate(book.publicationYear)}

      </p>
      <p className="mb-2">
        <span className="font-semibold">Género:</span> {book.gender}
      </p>
      <div className="flex justify-between py-4">
        <Link
          to={`/edit/${book._id}`}
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </Link>
        <button
          className="bg-pink-500 hover:bg-pink-300 text-grey-100 font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(book._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
