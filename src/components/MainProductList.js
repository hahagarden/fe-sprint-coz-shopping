import styled from "@emotion/styled";
import Product from "./Product";

const MainProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const List = styled.div`
  display: flex;

  & > div:not(:first-child) {
    margin-left: 1rem;
  }
`;

function MainProductList({ products, type }) {
  return (
    <MainProductListWrapper>
      <Title>
        {type === "Product" && "상품 리스트"} {type === "Bookmark" && "북마크 리스트"}
      </Title>
      <List>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </List>
    </MainProductListWrapper>
  );
}

export default MainProductList;
