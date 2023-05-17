import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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
      setCurrentList([...currentList, ...productList.slice(currentIndex, currentIndex + ITEMS_PER_ROW * ROWS_PER_SCROLL)]);
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
    setCurrentList(productList.slice(0, currentIndex));
  }, [productList]);

  useEffect(() => {
    addNextData();
  }, [isEnd]);

  return (
    <ProductPageWrapper>
      <ProductList products={currentList} />
    </ProductPageWrapper>
  );
}

export default ProductPage;
