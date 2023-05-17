import styled from "@emotion/styled";
import Product from "./Product";

const ProductListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 25%));
`;

function ProductList({ products }) {
  return (
    <>
      <ProductListWrapper>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductListWrapper>
    </>
  );
}

export default ProductList;
