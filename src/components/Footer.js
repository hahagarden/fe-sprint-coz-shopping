import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 1rem 0;
  border-top: 1px solid var(--light-shadow);

  * {
    color: var(--gray);
  }

  & span {
    margin: 0 0.5rem;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>
        <span>개인정보 처리방침</span>|<span>이용 약관</span>
      </p>
      <p>All rights reserverd &copy; hahagarden</p>
    </FooterWrapper>
  );
}

export default Footer;
