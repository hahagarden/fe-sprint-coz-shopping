import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { set } from "./redux/productListSlice";
import { useEffect } from "react";
import { init } from "./redux/bookmarkListSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(set(json));
      });

    if (!localStorage.getItem("bookmarks")) localStorage.setItem("bookmarks", JSON.stringify([]));
    dispatch(init(JSON.parse(localStorage.getItem("bookmarks"))));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/list" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
