import styled from "@emotion/styled";
import Product from "./Product";
import { ListTypes } from "../utils/enum";

const MainProductListWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const List = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
`;

function MainProductList({ products, type }) {
  return (
    <MainProductListWrapper>
      <Title>
        {type === ListTypes.PRODUCT && "상품 리스트"} {type === ListTypes.BOOKMARK && "북마크 리스트"}
      </Title>
      <List>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </List>
    </MainProductListWrapper>
  );
}

export default MainProductList;
