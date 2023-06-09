import styled from "@emotion/styled";
import Bookmark from "./Bookmark";
import { useDispatch } from "react-redux";
import { remove } from "../redux/modalDataSlice";
import { Types } from "../utils/enum";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: relative;
  width: 60rem;
  height: 40rem;
  border-radius: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${(props) => props.bgImage});
  background-size: cover;
  cursor: auto;

  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

const ModalBookmark = styled(Bookmark)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  & i {
    opacity: 1;
    font-size: 2.5rem;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 5.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
`;

function ProductModal({ product }) {
  const dispatch = useDispatch();

  const handleModalClick = () => {
    dispatch(remove());
  };

  return (
    <ModalBackground onClick={handleModalClick}>
      <ModalBox
        onClick={(event) => event.stopPropagation()}
        bgImage={product.type === Types.BRAND ? `${product.brand_image_url}` : `${product.image_url}`}
      >
        <ModalBookmark product={product} />
        <Title>{product.type === Types.BRAND ? product.brand_name : product.title}</Title>
      </ModalBox>
    </ModalBackground>
  );
}

export default ProductModal;
