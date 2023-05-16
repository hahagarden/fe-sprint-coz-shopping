import styled from "@emotion/styled";
import Bookmark from "./Bookmark";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: relative;
  width: 60rem;
  height: 40rem;
  border-radius: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${(props) => props.bgImage});
  background-size: cover;

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

function ProductModal({ product, setIsModalOpen }) {
  const handleModalClick = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalBackground onClick={handleModalClick}>
      <ModalBox
        onClick={(event) => event.stopPropagation()}
        bgImage={product.type === "Brand" ? `${product.brand_image_url}` : `${product.image_url}`}
      >
        <ModalBookmark product={product} />
        <Title>{product.type === "Brand" ? product.brand_name : product.title}</Title>
      </ModalBox>
    </ModalBackground>
  );
}

export default ProductModal;
