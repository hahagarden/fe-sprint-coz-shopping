import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  width: 12rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 1px var(--light-shadow);
`;

const MenuItem = styled(Link)`
  display: block;
  cursor: pointer;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid var(--light-shadow);
  text-align: left;
  font-size: 1rem;

  & > i {
    width: 1rem;
    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: var(--hover);
  }

  &:first-of-type {
    text-align: center;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

function Menu() {
  return (
    <MenuWrapper>
      <MenuItem to="/">OOO님, 안녕하세요!</MenuItem>
      <MenuItem to="/products/list">
        <i className="fa-solid fa-gift"></i>상품리스트 페이지
      </MenuItem>
      <MenuItem to="/bookmark">
        <i className="fa-solid fa-star"></i>북마크 페이지
      </MenuItem>
    </MenuWrapper>
  );
}

export default Menu;
