import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/api/books/${id}`);
    setBook(response.data.datas);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  console.log(book);

  return <div>SinglePage</div>;
};

export default SinglePage;
