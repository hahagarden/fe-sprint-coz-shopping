import styled from "@emotion/styled";
import Product from "./Product";

const MainProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const List = styled.div`
  height: 16rem;
  display: flex;

  & > div:not(:first-of-type) {
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
          <Product product={product} key={product.id} />
        ))}
      </List>
    </MainProductListWrapper>
  );
}

export default MainProductList;
