import styled from "@emotion/styled";
import Menu from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/coz_logo.png";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--white);
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 0 10px 5px var(--light-shadow);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const MenuButton = styled.button`
  position: relative;
  padding: 0 1rem;
  border: none;
  background-color: transparent;

  & > i {
    font-size: 2rem;
    cursor: pointer;
  }
`;

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Title>
        <Logo to="/">
          <img src={logo} />
        </Logo>
        <h1>COZ Shopping</h1>
      </Title>
      <MenuButton type="button" onClick={handleMenuButtonClick}>
        <i className="fa-solid fa-bars"></i>
        {isOpenMenu && <Menu />}
      </MenuButton>
    </HeaderWrapper>
  );
}

export default Header;
