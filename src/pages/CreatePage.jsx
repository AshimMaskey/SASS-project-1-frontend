import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [bookData, setBookData] = React.useState({
    bookName: "",
    bookPrice: "",
    bookAuthor: "",
    bookGenre: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/books",
        bookData
      );
      if (response.status === 201) {
        alert("Book created successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error?.response?.data?.message || error.message);
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Add a New Book
        </h2>

        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={bookData.bookName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="bookAuthor"
          placeholder="Author Name"
          value={bookData.bookAuthor}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="bookPrice"
          placeholder="Book Price"
          value={bookData.bookPrice}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="bookGenre"
          placeholder="Book Genre"
          value={bookData.bookGenre}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
