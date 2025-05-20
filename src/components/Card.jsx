import React from "react";

const Card = ({ book }) => {
  return (
    <>
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.bookName}</div>
            <p className="text-gray-700 text-base">{book.bookAuthor}</p>
            <br />
            <a
              target="_blank"
              href="https://bootsnipp.com/muhittinbudak"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              Bootstrap 3 examples
            </a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{book.bookGenre}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
