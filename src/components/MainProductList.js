import styled from "@emotion/styled";
import { ListTypes } from "../utils/enum";
import ProductList from "./ProductList";

const MainProductListWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

function MainProductList({ products, type }) {
  return (
    <MainProductListWrapper>
      <Title>
        {type === ListTypes.PRODUCT && "상품 리스트"} {type === ListTypes.BOOKMARK && "북마크 리스트"}
      </Title>
      <ProductList products={products} />
    </MainProductListWrapper>
  );
}

export default MainProductList;
