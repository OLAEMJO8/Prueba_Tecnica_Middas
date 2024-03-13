// Card.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ book, handleDelete, handleFavoriteAdd }) {
  return (
    <div key={book._id} className="bg-teal-700 p-4 rounded-md">
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="mb-2">Author: {book.author}</p>
      <p className="mb-2">Publication Year: {book.publicationYear}</p>
      <p className="mb-2">Gender: {book.gender}</p>
      <button onClick={() => handleFavoriteAdd(book._id)}>
        {book.isFavorite ? "❤️" : "🖤"}
      </button>
      <div className="flex justify-between">
        <Link
          to={`/edit/${book._id}`}
          className="bg-blue-700 px-2 py-1 text-xs rounded-md self-center"
        >
          Edit
        </Link>
        <button
          className="bg-red-700 px-2 py-1 text-xs rounded-md"
          onClick={() => handleDelete(book._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
