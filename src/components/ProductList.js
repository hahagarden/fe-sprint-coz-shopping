import styled from "@emotion/styled";
import Product from "./Product";

const ProductListWrapper = styled.div`
  display: grid;
  column-gap: 1rem;
  ${(props) => `
  grid-template-columns: repeat(auto-fill, minmax(calc(${100 / props.dataPerRow}% - 1rem), auto));
  `}
`;

function ProductList({ products }) {
  const DATA_PER_ROW = 4;

  return (
    <>
      <ProductListWrapper dataPerRow={DATA_PER_ROW}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ProductListWrapper>
    </>
  );
}

export default ProductList;
