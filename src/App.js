import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import BookmarkPage from "./pages/BookmarkPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./redux/productListSlice";
import { useEffect } from "react";
import { init } from "./redux/bookmarkListSlice";
import ProductModal from "./components/ProductModal";
import { StorageKey } from "./utils/enum";
import { getLocalStorage, setLocalStorage } from "./utils/func";

function App() {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modalData);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(set(json));
      });

    if (!getLocalStorage(StorageKey.BOOKMARKS)) setLocalStorage(StorageKey.BOOKMARKS, []);
    dispatch(init(getLocalStorage(StorageKey.BOOKMARKS)));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/list" element={<ProductPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      {modalData && <ProductModal product={modalData} />}
      <Footer />
    </>
  );
}

export default App;
