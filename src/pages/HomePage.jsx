import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  const [books, setBooks] = React.useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await axios.get("http://localhost:3000/api/books");
      setBooks(fetchedBooks.data);
    };
    fetchBooks();
  }, []);

  //comment

  if (!books) {
    return <div>Loading...</div>;
  }
  console.log(books);
  return (
    <>
      <Navbar />
      <div className="flex gap-10 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
