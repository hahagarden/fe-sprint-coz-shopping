import styled from "@emotion/styled";
import Filter from "./Filter";
import { Types } from "../utils/enum";
import filter_all from "./assets/filter_all.png";
import filter_product from "./assets/filter_product.png";
import filter_category from "./assets/filter_category.png";
import filter_exhibition from "./assets/filter_exhibition.png";
import filter_brand from "./assets/filter_brand.png";

const filterOptions = {
  all: { type: Types.ALL, title: "전체", imgUrl: filter_all },
  product: { type: Types.PRODUCT, title: "상품", imgUrl: filter_product },
  category: { type: Types.CATEGORY, title: "카테고리", imgUrl: filter_category },
  exhibition: { type: Types.EXHIBITION, title: "기획전", imgUrl: filter_exhibition },
  brand: { type: Types.BRAND, title: "브랜드", imgUrl: filter_brand },
};

const FilterListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
  & > div:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const ClickedFilter = styled(Filter)`
  & > div {
    font-weight: 600;
    color: var(--purple);
  }
`;

function FilterList({ currentFilter, handleFilterClick }) {
  return (
    <FilterListWrapper>
      {Object.values(filterOptions).map((option) => {
        return currentFilter === option.type ? (
          <ClickedFilter key={option.type} filterOption={option} handleFilterClick={handleFilterClick} />
        ) : (
          <Filter key={option.type} filterOption={option} handleFilterClick={handleFilterClick} />
        );
      })}
    </FilterListWrapper>
  );
}

export default FilterList;
