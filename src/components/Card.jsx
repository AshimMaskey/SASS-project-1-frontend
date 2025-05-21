import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <Link to={`/single/${book.id}`}>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.bookName}</div>
              <p className="text-gray-700 text-base">{book.bookAuthor}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{book.bookGenre}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
