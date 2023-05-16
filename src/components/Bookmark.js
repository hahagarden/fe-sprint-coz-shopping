import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/bookmarkListSlice";

const BookmarkWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: transparent;

  & > i {
    color: ${(props) => (props.isBookmarked ? "var(--yellow)" : "var(--gray)")};
    opacity: 0.7;
    text-shadow: 1px 1px var(--light-shadow);
    font-size: 1.5rem;
    background-color: transparent;

    &::before {
      background-color: transparent;
    }
  }
`; // index.css background-color 수정하기

function Bookmark({ product }) {
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
    <BookmarkWrapper isBookmarked={isBookmarked} onClick={handleBookmarkClick}>
      <i className="fa-solid fa-star"></i>
    </BookmarkWrapper>
  );
}

export default Bookmark;
