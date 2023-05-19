import styled from "@emotion/styled";
import Bookmark from "./Bookmark";
import { useDispatch } from "react-redux";
import { add } from "../redux/modalDataSlice";
import { Types } from "../utils/enum";

const ProductWrapper = styled.div``;

const ProductContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  flex: none;
  cursor: pointer;
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
    font-size: 1rem;
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
  const dispatch = useDispatch();

  const switchTextUI = (type) => {
    switch (type) {
      case Types.PRODUCT:
        return (
          <>
            <Discount>{product.discountPercentage}%</Discount>
            <Price>{Number(product.price).toLocaleString()}원</Price>
          </>
        );
      case Types.CATEGORY:
        return;
      case Types.EXHIBITION:
        return <ExhibitionDiscription>{product.sub_title}</ExhibitionDiscription>;
      case Types.BRAND:
        return (
          <>
            <FollowerText>관심고객수</FollowerText>
            <Follower>{product.follower.toLocaleString()}</Follower>
          </>
        );
    }
  };

  const handleProductClick = (modalData) => {
    dispatch(add(modalData));
  };

  return (
    <ProductWrapper>
      <ProductContainer onClick={() => handleProductClick(product)}>
        <Image>
          <img src={product.type === Types.BRAND ? `${product.brand_image_url}` : `${product.image_url}`} />
          <ProductBookmark product={product} />
        </Image>
        <Text>
          <Title>{product.type === Types.BRAND ? product.brand_name : product.title}</Title>
          {switchTextUI(product.type)}
        </Text>
      </ProductContainer>
    </ProductWrapper>
  );
}

export default Product;
