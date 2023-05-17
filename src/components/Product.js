import styled from "@emotion/styled";
import { useState } from "react";
import ProductModal from "./ProductModal";
import Bookmark from "./Bookmark";

const ProductWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  flex: none;
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 75%;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  height: 20%;

  * {
    font-size: 1.3rem;
  }
`;

const Title = styled.div`
  font-weight: 700;
  margin-top: 0.5rem;
`;

const Discount = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--purple);
  font-weight: 700;
`;

const Price = styled.div`
  position: absolute;
  right: 0;
`;

const ExhibitionDiscription = styled.div`
  position: absolute;
`;

const FollowerText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 700;
`;

const Follower = styled.div`
  position: absolute;
  right: 0;
`;

const ProductBookmark = styled(Bookmark)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

function Product({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const switchTextUI = (type) => {
    switch (type) {
      case "Product":
        return (
          <>
            <Discount>{product.discountPercentage}%</Discount>
            <Price>{product.price.toLocaleString()}원</Price>
          </>
        );
      case "Category":
        return;
      case "Exhibition":
        return <ExhibitionDiscription>{product.sub_title}</ExhibitionDiscription>;
      case "Brand":
        return (
          <>
            <FollowerText>관심고객수</FollowerText>
            <Follower>{product.follower.toLocaleString()}</Follower>
          </>
        );
    }
  };

  const handleProductClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ProductWrapper onClick={handleProductClick}>
        <Image>
          <img src={product.type === "Brand" ? `${product.brand_image_url}` : `${product.image_url}`} />{" "}
          <ProductBookmark product={product} />
        </Image>
        <Text>
          <Title>{product.type === "Brand" ? product.brand_name : product.title}</Title>
          {switchTextUI(product.type)}
        </Text>
      </ProductWrapper>
      {isModalOpen && <ProductModal product={product} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default Product;
