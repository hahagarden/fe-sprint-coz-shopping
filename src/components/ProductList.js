import styled from "@emotion/styled";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function ProductList({ products }) {
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ProductListWrapper>
  );
}

export default ProductList;
