import styled from "@emotion/styled";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const FilterImage = styled.img`
  width: 80px;
  height: 80px;
`;

const FilterText = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

function Filter({ filterOption, handleFilterClick, className }) {
  return (
    <FilterWrapper
      className={className}
      onClick={() => {
        handleFilterClick(filterOption.type);
      }}
    >
      <FilterImage src={filterOption.imgUrl} />
      <FilterText>{filterOption.title}</FilterText>
    </FilterWrapper>
  );
}

export default Filter;
