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
      console.error(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={bookData.bookName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bookAuthor"
          placeholder="Author Name"
          value={bookData.bookAuthor}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bookPrice"
          placeholder="Book Price"
          value={bookData.bookPrice}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bookGenre"
          placeholder="Book Genre"
          value={bookData.bookGenre}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePage;
