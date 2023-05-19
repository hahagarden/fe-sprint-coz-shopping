import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FilterList from "./FilterList";
import ProductList from "./ProductList";
import { StorageKey, Types } from "../utils/enum";
import { getLocalStorage, setLocalStorage } from "../utils/func";

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

  if (!getLocalStorage(StorageKey.CURRENT_INDEX)) setLocalStorage(StorageKey.CURRENT_INDEX, DATA_PER_PAGE);
  let currentIndex = Number(getLocalStorage(StorageKey.CURRENT_INDEX));

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
      setCurrentList([...currentList, ...filteredList.slice(currentIndex, currentIndex + DATA_PER_PAGE)]);
      setLocalStorage(StorageKey.CURRENT_INDEX, currentIndex + DATA_PER_PAGE);
      setIsEnd(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!getLocalStorage(StorageKey.FILTER_OPTION)) setLocalStorage(StorageKey.FILTER_OPTION, Types.ALL);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setLocalStorage(StorageKey.CURRENT_INDEX, DATA_PER_PAGE);
      setLocalStorage(StorageKey.FILTER_OPTION, Types.ALL);
    };
  }, []);

  useEffect(() => {
    if (getLocalStorage(StorageKey.FILTER_OPTION) === Types.ALL) setFilteredList(baseList);
    else setFilteredList(baseList.filter((product) => product.type === getLocalStorage(StorageKey.FILTER_OPTION)));
  }, [baseList]);

  useEffect(() => {
    setLocalStorage(StorageKey.CURRENT_INDEX, DATA_PER_PAGE);
    currentIndex = Number(getLocalStorage(StorageKey.CURRENT_INDEX));
    setCurrentList(filteredList.slice(0, currentIndex));
  }, [filteredList]);

  useEffect(() => {
    addNextData();
  }, [isEnd]);

  const handleFilterClick = (type) => {
    if (type === Types.ALL) setFilteredList(baseList);
    else setFilteredList(baseList.filter((product) => product.type === type));
    setLocalStorage(StorageKey.FILTER_OPTION, type);
  };

  return (
    <SubPageWrapper>
      <FilterList handleFilterClick={handleFilterClick} />
      <ProductList products={currentList} />
    </SubPageWrapper>
  );
}

export default SubPageTemplate;
