import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  const [books, setBooks] = React.useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books");
    setBooks(response.data.datas);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  if (books.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(books);
  return (
    <>
      <Navbar />
      <div className="flex gap-10 flex-wrap">
        {books.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
