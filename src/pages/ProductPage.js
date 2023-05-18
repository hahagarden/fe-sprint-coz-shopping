import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FilterList from "../components/FilterList";

const ProductPageWrapper = styled.div`
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ProductPage() {
  const ITEMS_PER_ROW = 4;
  const ROWS_PER_SCROLL = 3;

  if (!localStorage.getItem("currentIndex")) localStorage.setItem("currentIndex", ITEMS_PER_ROW * ROWS_PER_SCROLL);
  let currentIndex = Number(localStorage.getItem("currentIndex"));

  const productList = useSelector((state) => state.productList);
  const [filteredList, setFilteredList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
    }
  };

  const addNextData = () => {
    if (isEnd) {
      setCurrentList([...currentList, ...filteredList.slice(currentIndex, currentIndex + ITEMS_PER_ROW * ROWS_PER_SCROLL)]);
      localStorage.setItem("currentIndex", currentIndex + ITEMS_PER_ROW * ROWS_PER_SCROLL);
      setIsEnd(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      localStorage.setItem("currentIndex", ITEMS_PER_ROW * ROWS_PER_SCROLL);
    };
  }, []);

  useEffect(() => {
    setFilteredList(productList);
  }, [productList]);

  useEffect(() => {
    localStorage.setItem("currentIndex", ITEMS_PER_ROW * ROWS_PER_SCROLL);
    currentIndex = Number(localStorage.getItem("currentIndex"));
    setCurrentList(filteredList.slice(0, currentIndex));
  }, [filteredList]);

  useEffect(() => {
    addNextData();
  }, [isEnd]);

  const handleFilterClick = (type) => {
    if (type === "All") setFilteredList(productList);
    else setFilteredList(productList.filter((product) => product.type === type));
  };

  return (
    <ProductPageWrapper>
      <FilterList handleFilterClick={handleFilterClick} />
      <ProductList products={currentList} />
    </ProductPageWrapper>
  );
}

export default ProductPage;
