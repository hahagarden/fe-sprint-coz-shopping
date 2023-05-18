import styled from "@emotion/styled";
import Filter from "./Filter";

const filterOptions = {
  all: { type: "All", title: "전체", imgUrl: `${process.env.PUBLIC_URL}/public_assets/filter_all.png` },
  product: { type: "Product", title: "상품", imgUrl: `${process.env.PUBLIC_URL}/public_assets/filter_product.png` },
  category: { type: "Category", title: "카테고리", imgUrl: `${process.env.PUBLIC_URL}/public_assets/filter_category.png` },
  exhibition: { type: "Exhibition", title: "기획전", imgUrl: `${process.env.PUBLIC_URL}/public_assets/filter_exhibition.png` },
  brand: { type: "Brand", title: "브랜드", imgUrl: `${process.env.PUBLIC_URL}/public_assets/filter_brand.png` },
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

function FilterList({ handleFilterClick }) {
  const currentFilter = localStorage.getItem("filterOption");

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
