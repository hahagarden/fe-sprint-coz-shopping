import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import FilterList from "./FilterList";
import ProductList from "./ProductList";
import { Types } from "../utils/enum";

const SubPageWrapper = styled.div`
  width: 100vw;
  padding: 0 100px;
  padding-bottom: 30px;
  height: 100%;
  min-height: calc(100vh - 8rem);
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SubPageTemplate({ baseList }) {
  const DATA_PER_PAGE = 30;

  const [currentIndex, setCurrentIndex] = useState(DATA_PER_PAGE);
  const [currentFilter, setCurrentFilter] = useState(Types.ALL);

  const getFilteredList = () => {
    if (currentFilter === Types.ALL) return baseList;
    else return baseList.filter((product) => product.type === currentFilter);
  };

  const filteredList = useMemo(() => getFilteredList(), [baseList, currentFilter]); // 스크롤 시 memo 필요

  let currentList = filteredList.slice(0, currentIndex); // 필터 또는 스크롤 시 항상 업데이트 되어 memo 불필요

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setCurrentIndex((prev) => prev + DATA_PER_PAGE);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterClick = (type) => {
    setCurrentFilter(type);
    setCurrentIndex(DATA_PER_PAGE);
  };

  return (
    <SubPageWrapper>
      <FilterList handleFilterClick={handleFilterClick} />
      <ProductList products={currentList} />
    </SubPageWrapper>
  );
}

export default SubPageTemplate;
