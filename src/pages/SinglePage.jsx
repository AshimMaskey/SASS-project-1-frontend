import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/books/${id}`);
      setBook(response.data.datas);
    } catch (error) {
      console.error("Failed to fetch book:", error);
      alert("Failed to load book details");
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/books/${id}`
      );
      if (response.status === 200) {
        alert("Book deleted successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete book");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{book.bookName}</h1>
        <p className="text-gray-600">
          <span className="font-medium">Author:</span> {book.bookAuthor}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Genre:</span> {book.bookGenre}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Price:</span> ${book.bookPrice}
        </p>

        <button
          onClick={handleDelete}
          className="bg-red-500 py-2 px-4 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default SinglePage;
