import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/bookmarkListSlice";

const BookmarkWrapper = styled.div`
  position: absolute;

  & i {
    color: ${(props) => (props.isBookmarked ? "var(--yellow)" : "var(--gray)")};
    opacity: 0.7;
    text-shadow: 1px 1px var(--light-shadow);
  }
`;

function Bookmark({ product }) {
  const dispatch = useDispatch();

  const bookmarkList = useSelector((state) => state.bookmarkList);
  const isBookmarked = bookmarkList.find((el) => el.id === product.id) ? true : false;

  const handleBookmarkClick = () => {
    if (isBookmarked) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };

  return (
    <BookmarkWrapper isBookmarked={isBookmarked} onClick={handleBookmarkClick}>
      <i className="fa-solid fa-star"></i>
    </BookmarkWrapper>
  );
}

export default Bookmark;
