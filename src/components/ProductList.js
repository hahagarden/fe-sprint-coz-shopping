import styled from "@emotion/styled";
import Product from "./Product";

const ProductListWrapper = styled.div`
  width: 100%;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
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
