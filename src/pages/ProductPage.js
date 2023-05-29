import { useSelector } from "react-redux";
import SubPageTemplate from "./template/SubPageTemplate";

function ProductPage() {
  const productList = useSelector((state) => state.productList);

  return <SubPageTemplate baseList={productList} />;
}

export default ProductPage;
