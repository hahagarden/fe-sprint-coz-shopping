import { useSelector } from "react-redux";
import SubPageTemplate from "../components/SubPageTemplate";

function BookmarkPage() {
  const bookmarkList = useSelector((state) => state.bookmarkList);
  return (
    <>
      <SubPageTemplate baseList={bookmarkList} />
    </>
  );
}

export default BookmarkPage;
