import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/bookmarkListSlice";

const BookmarkWrapper = styled.div`
  cursor: pointer;

  & > i {
    color: ${(props) => (props.isBookmarked ? "var(--yellow)" : "var(--light-gray)")};
    text-shadow: 1px 1px var(--light-shadow);
    font-size: 1.5rem;
  }
`;

function Bookmark({ product, className }) {
  // className for emotion
  const dispatch = useDispatch();

  const bookmarkList = useSelector((state) => state.bookmarkList);
  const isBookmarked = bookmarkList.find((el) => el.id === product.id) ? true : false;

  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    if (isBookmarked) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };

  return (
    <BookmarkWrapper isBookmarked={isBookmarked} onClick={handleBookmarkClick} className={className}>
      <i className="fa-solid fa-star"></i>
    </BookmarkWrapper>
  );
}

export default Bookmark;
