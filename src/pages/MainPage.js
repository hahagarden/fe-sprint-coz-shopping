import { useSelector } from "react-redux";
import MainProductList from "../components/MainProductList";
import styled from "@emotion/styled";

const MainPageWrapper = styled.div`
  width: 100vw;
  padding: 0 100px;
  height: calc(100vh - 8rem);
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function MainPage() {
  const productList = useSelector((state) => state.productList);
  const bookmarkList = useSelector((state) => state.bookmarkList);

  return (
    <MainPageWrapper>
      <MainProductList products={productList.slice(0, 4)} type={"Product"} />
      <MainProductList products={bookmarkList.slice(0, 4)} type={"Bookmark"} />
    </MainPageWrapper>
  );
}

export default MainPage;
