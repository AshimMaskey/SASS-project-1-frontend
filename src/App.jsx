import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import SinglePage from "./pages/SinglePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-page" element={<EditPage />} />
        <Route path="/create-page" element={<CreatePage />} />
        <Route path="/single/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
};

export default App;
