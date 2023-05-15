import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/list" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </>
  );
}

export default App;
