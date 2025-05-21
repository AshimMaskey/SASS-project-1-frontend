import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/api/books/${id}`);
    setBook(response.data.datas);
  };

  useEffect(() => {
    fetchBook();
  }, []);
  if (!book) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/books/${id}`
    );
    if (response.status === 200) {
      alert("Book deleted successfully");
      navigate("/");
    }
  };

  return (
    <>
      <h1>{book.bookName}</h1>
      <h1>{book.bookPrice}</h1>
      <h1>{book.bookAuthor}</h1>
      <button
        onClick={handleDelete}
        className="bg-red-500 py-1 px-2 text-white cursor-pointer hover:bg-red-600 rounded-lg"
      >
        Delete me{" "}
      </button>
    </>
  );
};

export default SinglePage;
